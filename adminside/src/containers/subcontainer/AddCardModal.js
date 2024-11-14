import React,{Component} from 'react';
import {Modal, Button, Row, Col, Form} from 'react-bootstrap';

import "../../Styles/subcontainer/add-edit-card-modal.css"

export class AddCardModal extends Component{
    
    constructor(props){
        super(props);
        this.handleSubmit=this.handleSubmit.bind(this);
    }

    handleSubmit(event){
        event.preventDefault();
        fetch(process.env.REACT_APP_API+'crimecards',{
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                CrimeCardId:null,
                CrimeCardTitle: event.target.CrimeCardTitle.value,
                CrimeCardDes: event.target.CrimeCardDes.value,
                CrimeCardUrl: event.target.CrimeCardUrl.value
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
        const reload=()=>window.location.reload();

        return(
            <div className="container">
              

            <Modal onExit={reload}
            {...this.props}
            size="md"
            aria-labelledby="contained-modal-title-vcenter"
            centered
            >
                <Modal.Header closeButton>
                    <Modal.Title id="contained-modal-title-vcenter">
                        Add new card 
                    </Modal.Title>

                </Modal.Header>



                <Modal.Body>
                    <Row>
                        <Col sm={6}>
                            <Form onSubmit={this.handleSubmit}>

                                <Form.Group controlId="CrimeCardTitle">
                                    <Form.Label>Card Title</Form.Label>
                                    <Form.Control as="textarea" rows={2} name="CrimeTitle" required className="input-text"
                                    placeholder="Enter here title"/> 
                                </Form.Group>

                                <Form.Group controlId="CrimeCardDes">
                                    <Form.Label>Card Description</Form.Label>
                                    <Form.Control as="textarea" rows={3} name="CrimeDescription" required className="input-text"
                                    placeholder="Enter here description"/> 
                                </Form.Group>

                                <Form.Group controlId="CrimeCardUrl">
                                    <Form.Label>Card Url</Form.Label>
                                    <Form.Control as="textarea" rows={2} name="CrimeUrl" required className="input-text"
                                    placeholder="Enter here page url"/> 
                                </Form.Group>
                                
                                <Form.Group >
                                   <Button variant="primary" type="submit">
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