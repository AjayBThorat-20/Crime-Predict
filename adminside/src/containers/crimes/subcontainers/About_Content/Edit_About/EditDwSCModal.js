import React, { Component } from 'react';
import { Modal, Button, Row, Col, Form, Image } from 'react-bootstrap';

import "../../../../../Styles/Crimes/Crimepage/CrimePageData.css"

export class EditDwSCModal extends Component {

    constructor(props) {
        super(props);
        this.state = { abt_dw_scs: [], imagesrc:"" };
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleFileSelected = this.handleFileSelected.bind(this);
    }

    
    imagesrc = process.env.REACT_APP_PHOTOPATH + this.props.abt_dw_sc_img;

    handleSubmit(event) {
        event.preventDefault();
        fetch(process.env.REACT_APP_API + 'about-dw-sc', {
            method: 'PUT',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                Abt_Dw_SC_Id: event.target.Abt_Dw_SC_Id.value,
                Abt_Dw_SC_Title: event.target.Abt_Dw_SC_Title.value,
                Abt_Dw_SC_Img: this.abt_dw_sc_img || this.props.abt_dw_sc_img,
                Abt_Dw_SC_Des: event.target.Abt_Dw_SC_Des.value,
          
            }),
            
        })

            .then(res => res.json())
            .then((result) => {
                alert(result);
                console.log('Success:', result);
            },
                (error) => {
                    alert("Failed");
                    console.log('error:', error);
                })
              
    }

    handleFileSelected(event) {
        event.preventDefault();
        this.abt_dw_sc_img = event.target.files[0].name;
        const formData = new FormData();
        formData.append(
            "aboutFile",
            event.target.files[0],
            event.target.files[0].name
        );

        fetch(process.env.REACT_APP_API + 'about-dw-sc/AbtSaveFile', {
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
                        Update Data related to Crime Against SC
                        </Modal.Title>

                    </Modal.Header>



                    <Modal.Body>
                        <Row>

                            <Col sm={6}>
                            <Row className="mt-5 justify-content-center">
                                <Image width="200px" height="200px"
                                // process.env.REACT_APP_PHOTOPATH + this.props.photofilename
                                src={!this.state.imagesrc ? process.env.REACT_APP_PHOTOPATH + this.props.abt_dw_sc_img : this.state.imagesrc }  />
                                    </Row>
                                    <Row className="mt-5 justify-content-center">
                                <input type="File" onChange={this.handleFileSelected} />
                                </Row>
                            </Col>

                            <Col sm={6}>
                                <Form onSubmit={this.handleSubmit}>

                                    <Form.Group controlId="Abt_Dw_SC_Id" className="obj-display" >
                                        <Form.Label>Abt_Dw_SC_Id</Form.Label>
                                        <Form.Control type="text" name="Abt_Dw_SC_Id" required
                                            placeholder="Abt_Dw_SC_Id"
                                            disabled
                                            defaultValue={this.props.abt_dw_sc_id } />
                                    </Form.Group>


                                    <Form.Group controlId="Abt_Dw_SC_Title">
                                        <Form.Label>Title</Form.Label>
                                        <Form.Control as="textarea" rows={3} name="Abt_Dw_SC_Title" required
                                            placeholder="Abt_Dw_SC_Title"
                                            defaultValue={this.props.abt_dw_sc_title } />
                                    </Form.Group>

                                    <Form.Group controlId="Abt_Dw_SC_Des">
                                        <Form.Label>Description</Form.Label>
                                        <Form.Control as="textarea" rows={6} name="Abt_Dw_SC_Des" required
                                            placeholder="Abt_Dw_SC_Des"
                                            defaultValue={this.props.abt_dw_sc_des} />
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