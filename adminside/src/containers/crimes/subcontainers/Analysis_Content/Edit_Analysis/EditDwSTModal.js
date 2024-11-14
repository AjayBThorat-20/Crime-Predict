import React, { Component } from 'react';
import { Modal, Button, Row, Col, Form, Image } from 'react-bootstrap';

import "../../../../../Styles/Crimes/Crimepage/CrimePageData.css"

export class EditDwSTModal extends Component {

    constructor(props) {
        super(props);
        this.state = { an_dw_sts: [], imagesrc:"" };
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleFileSelected = this.handleFileSelected.bind(this);
    }

    
    imagesrc = process.env.REACT_APP_PHOTOPATH + this.props.an_dw_st_img;

    handleSubmit(event) {
        event.preventDefault();
        fetch(process.env.REACT_APP_API + 'analysis-dw-st', {
            method: 'PUT',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                An_Dw_ST_Id: event.target.An_Dw_ST_Id.value,
                An_Dw_ST_Title: event.target.An_Dw_ST_Title.value,
                An_Dw_ST_Img: this.an_dw_st_img || this.props.an_dw_st_img,
                An_Dw_ST_Des: event.target.An_Dw_ST_Des.value,
          
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
        this.an_dw_st_img = event.target.files[0].name;
        const formData = new FormData();
        formData.append(
            "chartFile",
            event.target.files[0],
            event.target.files[0].name
        );

        fetch(process.env.REACT_APP_API + 'analysis-dw-st/AnSaveFile', {
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
                        Update Analyatical Data related to Crime Against ST
                        </Modal.Title>

                    </Modal.Header>



                    <Modal.Body>
                        <Row>

                            <Col sm={6}>
                            <Row className="mt-5 justify-content-center">
                                <Image width="200px" height="200px"
                                // process.env.REACT_APP_PHOTOPATH + this.props.photofilename
                                src={!this.state.imagesrc ? process.env.REACT_APP_PHOTOPATH + this.props.an_dw_st_img : this.state.imagesrc }  />
                                    </Row>
                                    <Row className="mt-5 justify-content-center">
                                <input type="File" onChange={this.handleFileSelected} />
                                </Row>
                            </Col>

                            <Col sm={6}>
                                <Form onSubmit={this.handleSubmit}>

                                    <Form.Group controlId="An_Dw_ST_Id" className="obj-display" >
                                        <Form.Label>An_Dw_ST_Id</Form.Label>
                                        <Form.Control type="text" name="An_Dw_ST_Id" required
                                            placeholder="An_Dw_Child_Id"
                                            disabled
                                            defaultValue={this.props.an_dw_st_id } />
                                    </Form.Group>


                                    <Form.Group controlId="An_Dw_ST_Title">
                                        <Form.Label>Title</Form.Label>
                                        <Form.Control as="textarea" rows={3} name="An_Dw_ST_Title" required
                                            placeholder="An_Dw_ST_Title"
                                            defaultValue={this.props.an_dw_st_title } />
                                    </Form.Group>

                                    <Form.Group controlId="An_Dw_ST_Des">
                                        <Form.Label>Description</Form.Label>
                                        <Form.Control as="textarea" rows={6} name="An_Dw_ST_Des" required
                                            placeholder="An_Dw_ST_Des"
                                            defaultValue={this.props.an_dw_st_des} />
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