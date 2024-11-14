import React,{Component} from 'react';
import {Modal, Button, Row, Col, Form} from 'react-bootstrap';

import "../../Styles/subcontainer/add-edit-crime-modal.css"

export class EditCrimeModal extends Component{
    
    constructor(props){
        super(props);
        this.handleSubmit=this.handleSubmit.bind(this);
    }


    handleSubmit(event){
        event.preventDefault();
        fetch(process.env.REACT_APP_API+'crimes',{
            method: 'PUT',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                CrimesId:event.target.CrimesId.value,
                CrimesName: event.target.CrimesName.value
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
                        Edit crime type
                    </Modal.Title>

                </Modal.Header>



                <Modal.Body>
                    <Row>
                        <Col sm={6}>
                            <Form onSubmit={this.handleSubmit}>
                                <Form.Group controlId="CrimesId" className="crimeid-display">
                                    <Form.Label>crimeId</Form.Label>
                                    <Form.Control type="text" name="CrimesId" required
                                    disabled
                                    defaultValue={this.props.crimid}
                                    placeholder="CrimesId"/> 
                                </Form.Group>



                                <Form.Group controlId="CrimesName">
                                    {/* <Form.Label>crimeName</Form.Label> */}
                                    <Form.Control as="textarea" rows={3} name="Crime" className="input-text"
                                    defaultValue={this.props.crimname}
                                    placeholder="Update New Crime Type"/> 
                                </Form.Group>



                                
                                <Form.Group >
                                   <Button variant="primary" type="submit">
                                       Upadte Crime
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