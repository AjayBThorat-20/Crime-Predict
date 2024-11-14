import React, { Component } from 'react';
import { Modal, Button, Row, Col, Form, Image } from 'react-bootstrap';



export class AddVissionBgModal extends Component {

    constructor(props) {
        super(props);
        // this.state = { members: [] };
        this.state = { vissbgs: [], imagesrc: process.env.REACT_APP_PHOTOPATH + this.vissbgFile };

        this.handleSubmit = this.handleSubmit.bind(this);
        // console.log(this.handleSubmit);
        this.handleFileSelected = this.handleFileSelected.bind(this);
        // console.log(this.handleFileSelected);
    }

    vissbgFile = "anonymous.png";
    imagesrc = process.env.REACT_APP_PHOTOPATH + this.vissbgFile;



    handleSubmit(event) {
        event.preventDefault();
        fetch(process.env.REACT_APP_API + 'vissionbg', {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                VissionBgId: null,
                VissionBgPhoto: this.vissbgFile
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
        // console.log(this.aboutbgFile);
        const formData = new FormData();
        // console.log(formData);
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
            .then((result) => {
                this.imagesrc = process.env.REACT_APP_PHOTOPATH + result;
                this.setState({ imagesrc: process.env.REACT_APP_PHOTOPATH + result })
                console.log(result);
                console.log(this.imagesrc);
            },
                (error) => {
                    alert('Failed');
                })

    }

    render() {

        const reload = () => window.location.reload();
        return (

            <div className="container justify-contained-center"  >
                <Modal onExit={reload}
                    {...this.props}
                    size="md"
                    aria-labelledby="contained-modal-title-vcenter"
                    centered
                >
                    <Modal.Header closeButton>
                        <Modal.Title id="contained-modal-title-vcenter">
                            Add Vission Background
                        </Modal.Title>

                    </Modal.Header>



                    <Modal.Body>
                        <Row className="justify-content-center">
                            <Col sm={6}>
                                <Form onSubmit={this.handleSubmit}>

                                    <Form.Group >
                                        <Row className="mt-5 justify-content-center">
                                            <Image width="200px" height="200px" src={this.state.imagesrc} />
                                        </Row>
                                        <Row className="mt-5 justify-content-center">
                                            <input type="File" onChange={this.handleFileSelected} />
                                        </Row>
                                    </Form.Group>

                                    <Form.Group >
                                        <Button variant="primary" type="submit" ClassName="mt-5">
                                            Add
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