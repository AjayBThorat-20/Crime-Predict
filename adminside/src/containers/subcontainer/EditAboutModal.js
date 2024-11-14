import React,{Component} from 'react';
import {Modal, Button, Row, Col, Form} from 'react-bootstrap';

import "../../Styles/subcontainer/add-edit-av.css"

export class EditAboutModal extends Component{
    
    constructor(props){
        super(props);
        this.handleSubmit=this.handleSubmit.bind(this);
    }


    handleSubmit(event){
        event.preventDefault();
        fetch(process.env.REACT_APP_API+'about',{
            method: 'PUT',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                AboutId:event.target.AboutId.value,
                AboutInfo: event.target.AboutInfo.value
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
                        Edit About Information
                    </Modal.Title>

                </Modal.Header>



                <Modal.Body>
                    <Row>
                        <Col sm={6}>
                            <Form onSubmit={this.handleSubmit}>
                                <Form.Group controlId="AboutId" style={{display:'none'}}>
                                    <Form.Label>AboutId</Form.Label>
                                    <Form.Control type="text" name="AboutId" required
                                    disabled 
                                    defaultValue={this.props.abtid}
                                    placeholder="AboutInfo"/> 
                                </Form.Group>



                                <Form.Group controlId="AboutInfo"  >
                                    {/* <Form.Label>AboutInfo</Form.Label> */}
                                    <Form.Control as="textarea" rows={15} name="About" required  className="add-edit-av"
                                    defaultValue={this.props.abtinfo}
                                    placeholder="AboutInfo"/> 
                                </Form.Group>



                                
                                <Form.Group >
                                   <Button variant="primary" type="submit">
                                       Upadte About info
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