import React,{Component} from 'react';
import {Modal, Button, Card} from 'react-bootstrap';

import "../../Styles/containers/ChildContainers/readpost.css";


export class ReadPostModal extends Component{
    
    constructor(props){
        super(props);
    }


    render(){

        return(
              

            <Modal
            {...this.props}
            size="lg"
            aria-labelledby="contained-modal-title-vcenter"
            centered
            >
                <Modal.Header closeButton>

                </Modal.Header>



                <Modal.Body closeButton>
                <div className="textAlign-item" >

                <Card className="main-text-center" style={{border:'none'}} >
                    <div className="read-post">
                    <Card.Img width={300} height={200} src={process.env.REACT_APP_PHOTOPATH + this.props.photofilename}  />
                    </div>
            <Card.Body>
            <Card.Text className="obj-display">{this.props.postid} </Card.Text>
                <Card.Title ><b>Title :</b>  {this.props.posttitle}</Card.Title>
                <Card.Text><b>Type : </b>{this.props.crime} </Card.Text>
                <Card.Text><b>Date :</b> {this.props.crimedate}</Card.Text>
                <Card.Text><b>Descripton :</b>{this.props.postdes} </Card.Text>
                </Card.Body>
            </Card>
            </div>
                </Modal.Body>


            </Modal>


            // </div>
          )
    }
}