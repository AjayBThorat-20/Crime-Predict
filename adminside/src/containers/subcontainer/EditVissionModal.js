import React,{Component} from 'react';
import {Modal, Button, Row, Col, Form} from 'react-bootstrap';

import "../../Styles/subcontainer/add-edit-av.css"

export class EditVissionModal extends Component{
    
    constructor(props){
        super(props);
        
        this.handleSubmit=this.handleSubmit.bind(this);
    }


    handleSubmit(event){
        event.preventDefault();
        fetch(process.env.REACT_APP_API+'vission',{
            method: 'PUT',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                VissionId:event.target.VissionId.value,
                VissionInfo: event.target.VissionInfo.value
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
            size="lg"
            aria-labelledby="contained-modal-title-vcenter"
            centered
            >
                <Modal.Header closeButton>
                    <Modal.Title id="contained-modal-title-vcenter">
                        Edit Visson Information
                    </Modal.Title>

                </Modal.Header>



                <Modal.Body>
                    <Row>
                        <Col sm={6}>
                            <Form onSubmit={this.handleSubmit}>
                                
                                <Form.Group controlId="VissionId" style={{display:'none'}} >
                                    <Form.Label>VissionId</Form.Label>
                                    <Form.Control type="text" name="VissionId" required
                                    disabled
                                    defaultValue={this.props.vissid}
                                    placeholder="VissionInfo"
                                    
                                    /> 
                                </Form.Group>



                                <Form.Group controlId="VissionInfo">
                                    {/* <Form.Label>VissionInfo</Form.Label> */}
                                    <Form.Control as="textarea" rows={15} name="VissionInfo" required  className="add-edit-av"
                                    defaultValue={this.props.vissinfo}
                                    placeholder="VissionInfo"/> 
                                </Form.Group>



                                
                                <Form.Group >
                                   <Button variant="primary" type="submit">
                                       Upadte Vission info
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