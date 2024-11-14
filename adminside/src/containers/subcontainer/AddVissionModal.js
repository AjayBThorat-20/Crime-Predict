import React,{Component} from 'react';
import {Modal, Button, Row, Col, Form} from 'react-bootstrap';

import "../../Styles/subcontainer/add-edit-av.css"

export class AddVissionModal extends Component{
    
    constructor(props){
        super(props);
        this.handleSubmit=this.handleSubmit.bind(this);
    }


    handleSubmit(event){
        event.preventDefault();
        fetch(process.env.REACT_APP_API+'vission',{
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                VissionId:null,
                VissionInfo: event.target.VissionInfo.value
            }),
        })

        .then(res=>res.json())
        .then((result)=>{
            alert(result);
            // console.log('Success:', result);
        },
        (error)=>{
            alert("Failed");
            // console.log('error:', error);
        })
    }

    render(){
        const reload=()=>window.location.reload();

        return(
            <div className="container">
              

            <Modal onExit={reload}
            {...this.props}
            size="lg"
            aria-labelledby="contained-modal-title-vcenter"
            centered
            >
                <Modal.Header closeButton>
                    <Modal.Title id="contained-modal-title-vcenter">
                        Add Vission information 
                    </Modal.Title>

                </Modal.Header>



                <Modal.Body>
                    <Row >
                        <Col sm={6}>
                            <Form onSubmit={this.handleSubmit}>
                                <Form.Group controlId="VissionInfo">
                                    {/* <Form.Label>VissionInfo</Form.Label> */}
                                    <Form.Control as="textarea" rows={15} name="Vission" required className="add-edit-av"
                                    placeholder="VissionInfo"/> 
                                </Form.Group>



                                
                                <Form.Group >
                                   <Button variant="primary" type="submit">
                                       Add info
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