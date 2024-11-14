import React, { Component } from 'react';
import { Modal, Button, Row, Col, Form, Image } from 'react-bootstrap';

import "../../Styles/subcontainer/edit-team.css"

export class EditTeamModal extends Component {

    constructor(props) {
        super(props);
        this.state = { members: [], imagesrc:"" };
        
        this.handleSubmit = this.handleSubmit.bind(this);
        // console.log(this.handleSubmit);
        this.handleFileSelected = this.handleFileSelected.bind(this);
    }

    
    imagesrc = process.env.REACT_APP_PHOTOPATH + this.props.photofilename;

    componentDidMount() {
        fetch(process.env.REACT_APP_API + 'teams')
            .then(response => response.json())
            .then(data => {
                this.setState({ members: data });
                // console.log(data);
            });
            
    }


    handleSubmit(event) {
        console.log(this.photofilename);
        console.log(event.target);
        event.preventDefault();
        fetch(process.env.REACT_APP_API + 'teams', {
            method: 'PUT',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                MembersId: event.target.MembersId.value,
                MembersName: event.target.MembersName.value,
                MembersDescription: event.target.MembersDescription.value,
                MembersPhoto: this.photofilename || this.props.photofilename
               
            }),
           
        })

            .then(res => res.json())
            .then((result) => {
                alert(result);
                // console.log(result);
                console.log('Success:', result);
            },
                (error) => {
                    alert("Failed");
                    console.log('error:', error);
                })
    }

    handleFileSelected(event) {
        event.preventDefault();
        this.photofilename = event.target.files[0].name;
        const formData = new FormData();
        formData.append(
            "teamFile",
            event.target.files[0],
            event.target.files[0].name
        );

        fetch(process.env.REACT_APP_API + 'Teams/Profile', {
            method: 'POST',
            body: formData
        })

            .then(res => res.json())
            .then(result => {
                this.imagesrc = process.env.REACT_APP_PHOTOPATH + result;
                this.setState({ imagesrc: process.env.REACT_APP_PHOTOPATH + result})
                console.log(result);
                console.log(this.imagesrc);
            },
                (error) => {
                    alert('Failed');
                })
    }

    render() {
    //    console.log(this.props.photofilename);
    const reload=()=>window.location.reload();
        return (
            <div className="container">


                <Modal onExit={reload}
                    {...this.props}
                    size="lg"
                    aria-labelledby="contained-modal-title-vcenter"
                    centered
                >
                    <Modal.Header closeButton>
                        <Modal.Title id="contained-modal-title-vcenter">
                            Edit Member data
                        </Modal.Title>

                    </Modal.Header>



                    <Modal.Body>
                        <Row>

                            <Col sm={6}>
                            <Row className="mt-5 justify-content-center">
                                <Image width="200px" height="200px"
                                // process.env.REACT_APP_PHOTOPATH + this.props.photofilename
                                src={! this.state.imagesrc ? process.env.REACT_APP_PHOTOPATH + this.props.photofilename : this.state.imagesrc }  />
                                    </Row>
                                    <Row className="mt-5 justify-content-center">
                                <input type="File" onChange={this.handleFileSelected} />
                                </Row>
                            </Col>

                            <Col sm={6}>
                                <Form onSubmit={this.handleSubmit}>

                                    <Form.Group controlId="MembersId" className="obj-display">
                                        <Form.Label>MembersId</Form.Label>
                                        <Form.Control type="text" name="MembersId" required
                                            placeholder="MembersId"
                                            disabled
                                            defaultValue={this.props.memberid} />
                                    </Form.Group>


                                    <Form.Group controlId="MembersName">
                                        <Form.Label>Name</Form.Label>
                                        <Form.Control type="text" name="MembersName" required
                                            placeholder="MembersName"
                                            defaultValue={this.props.membername} />
                                    </Form.Group>

                                    <Form.Group controlId="MembersDescription">
                                        <Form.Label>Description</Form.Label>
                                        <Form.Control as="textarea" rows={6} name="MembersDescription" required
                                            placeholder="MembersDescription"
                                            defaultValue={this.props.memberdes} />
                                    </Form.Group>




                                    <Form.Group >
                                        <Button variant="primary" type="submit">
                                            Update
                                        </Button>
                                    </Form.Group>
                                </Form>
                            </Col>



                        </Row>
                    </Modal.Body>

                </Modal>


            </div>
        )
    }
}