import React, { Component } from 'react';
import { Button, Row, Col, Form, Image } from 'react-bootstrap';

import {Loader} from "../../components/Loader";
export class LinkUser extends Component {


    constructor(props) {
        super(props);
        this.state = { links: [], loading: true};
        this.handleSubmit = this.handleSubmit.bind(this);
        console.log(this.handleSubmit);

    }

    componentDidMount() {
        fetch(process.env.REACT_APP_API + 'contactus')
            .then(response => response.json())
            .then(data => {
                this.setState({ links: data, loading: false });
            });

    }


    handleSubmit(event) {
        event.preventDefault();
        this.refreshPage();
        fetch(process.env.REACT_APP_API + 'contactus', {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                LinkUserId: null,
                LinkUserName: event.target.LinkUserName.value,
                LinkUserEmail: event.target.LinkUserEmail.value,
                LinkUserMessage: event.target.LinkUserMessage.value
                // LinkUserDate: event.target.LinkUserDate.value
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

    refreshPage() {
        window.location.reload()
    }

    render() {


        return (


            <div className="container-contact">

                <div className="container justify-contained-center">
                    <div className="m-3 d-flex justify-content-center" >
                        <h1>Contact Us</h1>
                    </div>
                </div>

                <div className="page-data">

                {this.state.loading ?

                    <div className="justify-content-center"> <Loader /> </div> :

                    <div className="main-content" style={{marginLeft:'15%', marginRight:'15%'}}>
                    <div className="justify-contained-center" >

                        <div className="jumbotron mt-4" style={{ borderRadius: '45px',}} >

                            <Form onSubmit={this.handleSubmit}>
                                <Form.Group controlId="LinkUserName" className="mt-1">
                                    <Form.Label>Full Name</Form.Label>
                                    <Form.Control type="text" name="LinkUserName" required
                                        placeholder="Enter Your Full Name here..." />
                                </Form.Group>


                                <Form.Group controlId="LinkUserEmail" className="mt-2" >
                                    <Form.Label>Email</Form.Label>
                                    <Form.Control type="text" name="LinkUserEmail" required
                                        placeholder="Please Enter your email address...." />
                                </Form.Group>

                                <Form.Group controlId="LinkUserMessage" className="mt-2" >
                                    <Form.Label>Message</Form.Label>
                                    <Form.Control as="textarea" rows={6} name="LinkUserMessage" required
                                        placeholder="Please Write a Message here........" />
                                </Form.Group>

                                <Form.Group className="mt-3" >
                                    <Button variant="secondary" type="submit" >
                                        Submit
                                    </Button>
                                </Form.Group>
                            </Form>

                        </div>
                    </div>
                    </div>
                }


                </div>

            </div>
        )
    }
}


