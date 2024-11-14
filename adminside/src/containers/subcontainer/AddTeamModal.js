import React, { Component } from 'react';
import {Modal, Button, Row, Col, Form, Image} from 'react-bootstrap';



export class AddTeamModal extends Component {

    constructor(props) {
        super(props);
        // this.state = { members: [] };
        this.state = { members: [], imagesrc: process.env.REACT_APP_PHOTOPATH + this.photofilename  };

        this.handleSubmit = this.handleSubmit.bind(this);
        // console.log(this.handleSubmit);
        this.handleFileSelected = this.handleFileSelected.bind(this);
        // console.log(this.handleFileSelected);
    }

    photofilename = "anonymous.png";
    imagesrc = process.env.REACT_APP_PHOTOPATH + this.photofilename;

    
    componentDidMount() {
        fetch(process.env.REACT_APP_API + 'teams')
            .then(response => response.json())
            .then(data => {
                this.setState({ members: data });
            });
    }


    handleSubmit(event) {
        event.preventDefault();
        fetch(process.env.REACT_APP_API + 'teams', {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                MembersId: null,
                MembersName: event.target.MembersName.value,
                MembersDescription: event.target.MembersDescription.value,
                MembersPhoto: this.photofilename
            }),
        })

            .then(res => res.json())
            .then((result) => {
                alert(result);
                // console.log('Success:', result);
            },
                (error) => {
                    alert("Failed");
                    // console.log('error:', error);
                })
    }


    handleFileSelected(event) {
        event.preventDefault();
        this.photofilename = event.target.files[0].name;
        console.log(this.photofilename);
        const formData = new FormData();
        console.log(formData);
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
            .then((result) => {
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

        const reload=()=>window.location.reload();
        return (

            <div className="container justify-contained-center"  >
                 <Modal onExit={reload}
            {...this.props}
            size="lg"
            aria-labelledby="contained-modal-title-vcenter"
            centered
            >
                <Modal.Header closeButton>
                    <Modal.Title id="contained-modal-title-vcenter">
                        Add member
                    </Modal.Title>

                </Modal.Header>



                <Modal.Body>
                    <Row>
                        <Col sm={6}>
                            <Form onSubmit={this.handleSubmit}>
                                <Form.Group controlId="MembersName">
                                    <Form.Label>Name</Form.Label>
                                    <Form.Control type="text" name="MembersName" required
                                        placeholder="Enter Name" />
                                </Form.Group>


                                <Form.Group controlId="MembersDescription">
                                    <Form.Label>Description</Form.Label>
                                    <Form.Control as="textarea" rows={5} name="MembersDescription" required
                                        placeholder="Enter job description or achievement's" />
                                </Form.Group>


                                
                        <Form.Group >
                                   <Button variant="primary" type="submit">
                                       Add 
                                   </Button>
                                </Form.Group>
                            </Form>
                        </Col>


                        <Col sm={6}>
                        <Row className="mt-5 justify-content-center">
                            <Image width="200px" height="200px" src={this.state.imagesrc}/>
                            </Row>
                            <Row className="mt-5 justify-content-center">
                            <input type="File" onChange={this.handleFileSelected} />
                            </Row>
                        </Col>
                    </Row>
                </Modal.Body>
            </Modal>




            </div>
        )
    }
}