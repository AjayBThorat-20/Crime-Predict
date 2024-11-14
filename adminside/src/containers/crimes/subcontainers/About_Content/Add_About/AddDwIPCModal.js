import React, { Component } from 'react';
import {Modal, Button, Row, Col, Form, Image } from 'react-bootstrap';



export class AddDwIPCModal extends Component {

    constructor(props) {
        super(props);
        this.state = { abt_dw_ipcs: [], imagesrc: process.env.REACT_APP_PHOTOPATH + this.abt_dw_ipc_img  };
        this.handleSubmit = this.handleSubmit.bind(this);
        console.log(this.handleSubmit);
        this.handleFileSelected = this.handleFileSelected.bind(this);
        console.log(this.handleFileSelected);
    }

    abt_dw_ipc_img = "insert_analysis.jpg";
    imagesrc = process.env.REACT_APP_PHOTOPATH + this.abt_dw_ipc_img;
    


    componentDidMount() {
        fetch(process.env.REACT_APP_API + 'about-dw-ipc')
            .then(response => response.json())
            .then(data => {
                this.setState({ abt_dw_ipcs: data });
            });
    }



    handleSubmit(event) {
        event.preventDefault();
        fetch(process.env.REACT_APP_API + 'about-dw-ipc', {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                Abt_Dw_IPC_Id: null,
                Abt_Dw_IPC_Title: event.target.Abt_Dw_IPC_Title.value,
                Abt_Dw_IPC_Img: this.abt_dw_ipc_img,
                Abt_Dw_IPC_Des: event.target.Abt_Dw_IPC_Des.value,
          
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
        // console.log(this.abt_dw_ipc_img);
        const formData = new FormData();
        // console.log(formData);
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

            <div className="container">


            <Modal onExit={reload}
                {...this.props}
                size="lg"
                aria-labelledby="contained-modal-title-vcenter"
                centered
            >
                <Modal.Header closeButton>
                    <Modal.Title id="contained-modal-title-vcenter">
                    Add Data related to Crime Against IPC
                    </Modal.Title>

                </Modal.Header>



                <Modal.Body>
                    <Row>

                        <Col sm={6}>

                            <Row className="mt-5 justify-content-center">
                                <Image width="200px" height="200px" src={this.state.imagesrc} />
                            </Row>
                            <Row className="mt-5 justify-content-center">
                                <input onChange={this.handleFileSelected} type="File" />
                            </Row>

                        </Col>
                        <Col sm={6}>
                            <Form onSubmit={this.handleSubmit}>
                                <Form.Group controlId="Abt_Dw_IPC_Title">
                                    <Form.Label>Title</Form.Label>
                                    <Form.Control as="textarea" rows={3} name="Abt_Dw_IPC_Title" required
                                        placeholder="Title" />
                                </Form.Group>


                                <Form.Group controlId="Abt_Dw_IPC_Des">
                                    <Form.Label>Description</Form.Label>
                                    <Form.Control as="textarea" rows={6} name="Abt_Dw_IPC_Des" required
                                        placeholder="Description" />
                                </Form.Group>

                                <Form.Group >
                                    <Button variant="primary" type="submit">
                                        Add Crime
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