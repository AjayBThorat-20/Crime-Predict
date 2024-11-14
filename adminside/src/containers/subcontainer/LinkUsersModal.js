import React,{Component} from 'react';
import {Card,Modal, Button} from 'react-bootstrap';



export class LinkUsersModal extends Component{
    
    constructor(props){
        super(props);
        this.state = { links: [] };
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
                    Read User Querry and solve the problems
                    </Modal.Title>

                </Modal.Header>



                <Modal.Body>
                    <Card className="text-center">
                <Card.Header>
                <Card.Text style={{display:'none'}}>{this.props.linkid}</Card.Text >
                    <Card.Title>{this.props.linkname}</Card.Title>
                    </Card.Header>
                <Card.Body>
                    <Card.Title>{this.props.linkemail}</Card.Title>
                    <Card.Text>{this.props.linkmessages}</Card.Text>
                </Card.Body>
                {/* <Card.Footer className="text-muted">{this.props.date}</Card.Footer> */}
                </Card>
                </Modal.Body>


                <Modal.Footer>
                <Button variant="danger" onClick={this.props.onHide}>
                    Close
                </Button>
                </Modal.Footer>
            </Modal>


            </div>
          )
    }
}