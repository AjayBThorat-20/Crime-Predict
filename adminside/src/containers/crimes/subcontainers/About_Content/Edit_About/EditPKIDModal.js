import React, { Component } from 'react';
import { Modal, Button, Row, Col, Form, Image } from 'react-bootstrap';

import "../../../../../Styles/Crimes/Crimepage/CrimePageData.css"

export class EditPKIDModal extends Component {

    constructor(props) {
        super(props);
        this.state = { abt_pkids: [], imagesrc:"" };
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleFileSelected = this.handleFileSelected.bind(this);
    }

    
    imagesrc = process.env.REACT_APP_PHOTOPATH + this.props.abt_pkid_img;

    handleSubmit(event) {
        event.preventDefault();
        fetch(process.env.REACT_APP_API + 'about-pkid', {
            method: 'PUT',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                Abt_PKID_Id: event.target.Abt_PKID_Id.value,
                Abt_PKID_Title: event.target.Abt_PKID_Title.value,
                Abt_PKID_Img: this.abt_pkid_img || this.props.abt_pkid_img,
                Abt_PKID_Des: event.target.Abt_PKID_Des.value,
          
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
        this.abt_pkid_img = event.target.files[0].name;
        const formData = new FormData();
        formData.append(
            "aboutFile",
            event.target.files[0],
            event.target.files[0].name
        );

        fetch(process.env.REACT_APP_API + 'about-pkid/AbtSaveFile', {
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

        return (
            <div className="container">


                <Modal
                    {...this.props}
                    size="lg"
                    aria-labelledby="contained-modal-title-vcenter"
                    centered
                >
                    <Modal.Header closeButton>
                        <Modal.Title id="contained-modal-title-vcenter">
                        Update Data related to PKID
                        </Modal.Title>

                    </Modal.Header>



                    <Modal.Body>
                        <Row>

                            <Col sm={6}>
                            <Row className="mt-5 justify-content-center">
                                <Image width="200px" height="200px"
                                // process.env.REACT_APP_PHOTOPATH + this.props.photofilename
                                src={!this.state.imagesrc ? process.env.REACT_APP_PHOTOPATH + this.props.abt_pkid_img : this.state.imagesrc }  />
                                    </Row>
                                    <Row className="mt-5 justify-content-center">
                                <input type="File" onChange={this.handleFileSelected} />
                                </Row>
                            </Col>

                            <Col sm={6}>
                                <Form onSubmit={this.handleSubmit}>

                                    <Form.Group controlId="Abt_PKID_Id" className="obj-display">
                                        <Form.Label>Abt_PKID_Id</Form.Label>
                                        <Form.Control type="text" name="Abt_PKID_Id" required
                                            placeholder="Abt_PKID_Id"
                                            disabled
                                            defaultValue={this.props.abt_pkid_id} />
                                    </Form.Group>


                                    <Form.Group controlId="Abt_PKID_Title" >
                                        <Form.Label>Title</Form.Label>
                                        <Form.Control as="textarea" rows={3} name="Abt_PKID_Title" required
                                            placeholder="Abt_PKID_Title"
                                            defaultValue={this.props.abt_pkid_title} />
                                    </Form.Group>

                                    <Form.Group controlId="Abt_PKID_Des">
                                        <Form.Label>Description</Form.Label>
                                        <Form.Control as="textarea" rows={6} name="Abt_PKID_Des" required
                                            placeholder="Abt_PKID_Des"
                                            defaultValue={this.props.abt_pkid_des } />
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