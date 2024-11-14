import React, { Component } from 'react';
import { Modal, Button, Row, Col, Form, Image } from 'react-bootstrap';



export class EditVissionBgModal extends Component {

    constructor(props) {
        super(props);
        this.state = { vissbgs: [], imagesrc:"" };
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleFileSelected = this.handleFileSelected.bind(this);
    }

    
    imagesrc = process.env.REACT_APP_PHOTOPATH + this.props.vissbgFile;


    componentDidMount() {
        fetch(process.env.REACT_APP_API + 'vissionbg')
            .then(response => response.json())
            .then(data => {
                this.setState({ vissbgs: data });
                console.log(data);
            });
            
    }

    handleSubmit(event) {
        event.preventDefault();
        fetch(process.env.REACT_APP_API + 'vissionbg', {
            method: 'PUT',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                VissionBgId: event.target.VissionBgId.value,
                VissionBgPhoto: this.vissbgFile || this.props.vissbgFile
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
        this.vissbgFile = event.target.files[0].name;
        const formData = new FormData();
        formData.append(
            "VissionBgFile",
            event.target.files[0],
            event.target.files[0].name
        );

        fetch(process.env.REACT_APP_API + 'vissionbg/VissBgfile', {
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
        const reload=()=>window.location.reload();
        return (
            <div className="container">


                <Modal onExit={reload}
                    {...this.props}
                    size="md"
                    aria-labelledby="contained-modal-title-vcenter"
                    centered
                >
                    <Modal.Header closeButton>
                        <Modal.Title id="contained-modal-title-vcenter">
                        Update About BackGroung
                        </Modal.Title>

                    </Modal.Header>



                    <Modal.Body>
                        <Row >

                            <Col sm={6}>
                            <Row className="mt-2" style={{marginLeft:'auto', marginRight:'auto'}}>
                                <Image width="460px" height="300px" 
                                src={!this.state.imagesrc ? process.env.REACT_APP_PHOTOPATH + this.props.vissbgFile : this.state.imagesrc }  />
                                    </Row>
                                    <Row className="mt-5 justify-content-center">
                                <input type="File" onChange={this.handleFileSelected} className="ml-3"/>
                                </Row>
                            </Col>

                            <Col sm={8}>
                                <Form onSubmit={this.handleSubmit} className="mt-4">

                                    <Form.Group controlId="VissionBgId"  style={{display:'none'}} >
                                        <Form.Label>VissionBgId</Form.Label>
                                        <Form.Control type="text" name="VissionBgId" required
                                            placeholder="VissionBgId"
                                            disabled
                                            defaultValue={this.props.vissbgid} />
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