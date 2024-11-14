import React,{Component} from 'react';
import {Modal, Button, Row, Col, Form} from 'react-bootstrap';

import "../../Styles/subcontainer/add-edit-av.css"



export class AddAboutModal extends Component{
    
    constructor(props){
        super(props);
        this.handleSubmit=this.handleSubmit.bind(this);
    }


    handleSubmit(event){
        event.preventDefault();
        fetch(process.env.REACT_APP_API+'about',{
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                AboutId:null,
                AboutInfo: event.target.AboutInfo.value
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
                        Add New About information 
                    </Modal.Title>

                </Modal.Header>



                <Modal.Body className='infomodal'>
                    <Row>
                        <Col sm={6}>
                            <Form onSubmit={this.handleSubmit}>
                                <Form.Group controlId="AboutInfo">
                                    {/* <Form.Label>AboutInfo</Form.Label> */}
                                    <Form.Control as="textarea" rows={15} name="About" required className="add-edit-av"
                                    placeholder="you can create new paragraphs here"/> 
                                </Form.Group>



                                
                                <Form.Group >
                                   <Button variant="primary" type="submit">
                                       Add About info
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