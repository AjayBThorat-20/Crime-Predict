import React, { Component } from 'react';
import { Modal, Button, Card } from 'react-bootstrap';

import "../../Styles/containers/ChildContainers/displayteamModal.css"
export class DisplayTeamModal extends Component {

    constructor(props) {
        super(props);
        this.state = { members: []};
    }

    


    render() {

        return (
            <div className="container" >


                <Modal
                    {...this.props}
                    size="md"
                    aria-labelledby="contained-modal-title-vcenter"
                    centered
                    width="auto"
                    
                >
                    <Modal.Header closeButton />
                     

                    <Modal.Body className="team-modal-body">
                    <Card className="Team-card">

                            <Card.Img variant="top" className="team-img-img" height={300} width={200} src={process.env.REACT_APP_PHOTOPATH + this.props.photofilename} /><Card.Body>
                                <div className="text-card-modal">
                                <Card.Text disabled className="obj-display"> {this.props.memberid} </Card.Text>

                                <Card.Title className="Team-card-title">{this.props.membername}</Card.Title>
                                <Card.Text > {this.props.memberdes}</Card.Text>
                                </div>
                               
                            </Card.Body>
                        </Card>
                    </Modal.Body>


                    {/* <Modal.Footer>
                        <Button variant="danger" onClick={this.props.onHide}>
                            Close
                        </Button>
                    </Modal.Footer> */}
                </Modal>


            </div>
        )
    }
}