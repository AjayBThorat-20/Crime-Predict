import React, { Component } from 'react';
import { Modal, Button, Row, Col, Form, Image } from 'react-bootstrap';

import "../../../../../Styles/Crimes/Crimepage/CrimePageData.css"

export class EditDwIPCModal extends Component {

    constructor(props) {
        super(props);
        this.state = { abt_dw_ipcs: [], imagesrc:"" };
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleFileSelected = this.handleFileSelected.bind(this);
        // console.log(this.state);
    }

    
    imagesrc = process.env.REACT_APP_PHOTOPATH + this.props.abt_dw_ipc_img;

    handleSubmit(event) {
        event.preventDefault();
        fetch(process.env.REACT_APP_API + 'about-dw-ipc', {
            method: 'PUT',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                Abt_Dw_IPC_Id: event.target.Abt_Dw_IPC_Id.value,
                Abt_Dw_IPC_Title: event.target.Abt_Dw_IPC_Title.value,
                Abt_Dw_IPC_Img: this.abt_dw_ipc_img || this.props.abt_dw_ipc_img,
                Abt_Dw_IPC_Des: event.target.Abt_Dw_IPC_Des.value
          
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
        this.abt_dw_ipc_img = event.target.files[0].name;
        const formData = new FormData();
        formData.append(
            "aboutFile",
            event.target.files[0],
            event.target.files[0].name
        );

        fetch(process.env.REACT_APP_API + 'about-dw-ipc/AbtSaveFile', {
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
                        Update Data related to Crime Against IPC
                        </Modal.Title>

                    </Modal.Header>



                    <Modal.Body>
                        <Row>

                            <Col sm={6}>
                            <Row className="mt-5 justify-content-center">
                                <Image width="200px" height="200px"
                                // process.env.REACT_APP_PHOTOPATH + this.props.photofilename
                                src={!this.state.imagesrc ? process.env.REACT_APP_PHOTOPATH + this.props.abt_dw_ipc_img : this.state.imagesrc }  />
                                    </Row>
                                    <Row className="mt-5 justify-content-center">
                                <input type="File" onChange={this.handleFileSelected} />
                                </Row>
                            </Col>

                            <Col sm={6}>
                                <Form onSubmit={this.handleSubmit}>

                                    <Form.Group controlId="Abt_Dw_IPC_Id" className="obj-display" >
                                        <Form.Label>Abt_Dw_IPC_Id</Form.Label>
                                        <Form.Control type="text" name="Abt_Dw_IPC_Id" required
                                            placeholder="Abt_Dw_IPC_Id"
                                            disabled
                                            defaultValue={this.props.abt_dw_ipc_id } />
                                    </Form.Group>


                                    <Form.Group controlId="Abt_Dw_IPC_Title">
                                        <Form.Label>Title</Form.Label>
                                        <Form.Control as="textarea" rows={3} name="Abt_Dw_IPC_Title" required
                                            placeholder="Abt_Dw_IPC_Title"
                                            defaultValue={this.props.abt_dw_ipc_title } />
                                    </Form.Group>

                                    <Form.Group controlId="Abt_Dw_IPC_Des">
                                        <Form.Label>Description</Form.Label>
                                        <Form.Control as="textarea" rows={6} name="Abt_Dw_IPC_Des" required
                                            placeholder="Abt_Dw_IPC_Des"
                                            defaultValue={this.props.abt_dw_ipc_des} />
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


                    <Modal.Footer>
                        <Button variant="danger" onClick={this.props.onHide}>
                            Close
                        </Button>
                    </Modal.Footer>
                </Modal>


            </div>
        )
    }
}