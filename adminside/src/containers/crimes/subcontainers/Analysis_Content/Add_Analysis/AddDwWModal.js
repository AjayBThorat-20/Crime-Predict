import React, { Component } from 'react';
import {Modal, Button, Row, Col, Form, Image } from 'react-bootstrap';



export class AddDwWModal extends Component {

    constructor(props) {
        super(props);
        this.state = { an_dw_ws: [], imagesrc: process.env.REACT_APP_PHOTOPATH + this.an_dw_w_img};
        this.handleSubmit = this.handleSubmit.bind(this);
        console.log(this.handleSubmit);
        this.handleFileSelected = this.handleFileSelected.bind(this);
        console.log(this.handleFileSelected);
    }

    an_dw_w_img = "insert_analysis.png";
    imagesrc = process.env.REACT_APP_PHOTOPATH + this.an_dw_w_img;
    


    componentDidMount() {
        fetch(process.env.REACT_APP_API + 'analysis-dw-w')
            .then(response => response.json())
            .then(data => {
                this.setState({ an_dw_ws: data });
                
            });
    }






    handleSubmit(event) {
        event.preventDefault();
        fetch(process.env.REACT_APP_API + 'analysis-dw-w', {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                An_Dw_W_Id: null,
                An_Dw_W_Title: event.target.An_Dw_W_Title.value,
                An_Dw_W_Img: this.an_dw_w_img,
                An_Dw_W_Des: event.target.An_Dw_W_Des.value,
          
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
        this.an_dw_w_img = event.target.files[0].name;
        // console.log(this.an_dw_w_img);
        const formData = new FormData();
        // console.log(formData);
        formData.append(
            "chartFile",
            event.target.files[0],
            event.target.files[0].name

        );
        fetch(process.env.REACT_APP_API + 'analysis-dw-w/AnSaveFile', {
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
                    Add New Analyatical Data related to Crime Against Women
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
                                <Form.Group controlId="An_Dw_W_Title">
                                    <Form.Label>Title</Form.Label>
                                    <Form.Control as="textarea" rows={3} name="An_Dw_W_Title" required
                                        placeholder="Title" />
                                </Form.Group>


                                <Form.Group controlId="An_Dw_W_Des">
                                    <Form.Label>Description</Form.Label>
                                    <Form.Control as="textarea" rows={6} name="An_Dw_W_Des" required
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