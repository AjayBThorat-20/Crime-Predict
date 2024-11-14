import React,{Component} from 'react';
import {Modal, Button, Row, Col, Form} from 'react-bootstrap';

import "../../Styles/subcontainer/add-edit-card-modal.css"

export class EditCardModal extends Component{
    
    constructor(props){
        super(props);
        this.handleSubmit=this.handleSubmit.bind(this);
    }


    handleSubmit(event){
        event.preventDefault();
        fetch(process.env.REACT_APP_API+'crimecards',{
            method: 'PUT',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                CrimeCardId:event.target.CrimeCardId.value,
                CrimeCardTitle: event.target.CrimeCardTitle.value,
                CrimeCardDes: event.target.CrimeCardDes.value,
                CrimeCardUrl: event.target.CrimeCardUrl.value,
            }),
        })

        .then(res=>res.json())
        .then((result)=>{
            alert(result);
            console.log('Success:', result);
        },
        (error)=>{
            alert("Failed");
            console.log('error:', error);
        })
    }

    render(){

        return(
            <div className="container">
              

            <Modal
            {...this.props}
            size="md"
            aria-labelledby="contained-modal-title-vcenter"
            centered
            >
                <Modal.Header closeButton>
                    <Modal.Title id="contained-modal-title-vcenter">
                        Update old card 
                    </Modal.Title>

                </Modal.Header>



                <Modal.Body>
                    <Row>
                        <Col sm={6}>
                            <Form onSubmit={this.handleSubmit}>
                                <Form.Group controlId="CrimeCardId" className="obj-display">
                                    <Form.Label>CrimeCardId</Form.Label>
                                    <Form.Control type="text" name="CrimeCardId" required
                                    disabled 
                                    defaultValue={this.props.addccid}
                                    placeholder="CrimeCardId"/> 
                                </Form.Group>



                                <Form.Group controlId="CrimeCardTitle">
                                    <Form.Label>Card Title</Form.Label>
                                    <Form.Control as="textarea" rows={2} name="Title" required
                                    defaultValue={this.props.addcctitle} className="input-text"
                                    placeholder="New title"/> 
                                </Form.Group>

                                <Form.Group controlId="CrimeCardDes">
                                    <Form.Label>Card Description</Form.Label>
                                    <Form.Control as="textarea" rows={3} name="Description" required
                                    defaultValue={this.props.addccdes} className="input-text"
                                    placeholder="Changes in old description"/> 
                                </Form.Group>

                                <Form.Group controlId="CrimeCardUrl">
                                    <Form.Label>Card Url</Form.Label>
                                    <Form.Control as="textarea" rows={2} name="Url" required
                                    defaultValue={this.props.addccurl} className="input-text"
                                    placeholder="Enter here new page url"/> 
                                </Form.Group>



                                
                                <Form.Group >
                                   <Button variant="primary" type="submit">
                                       Save 
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