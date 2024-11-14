import React, { Component } from 'react';
import { Card } from 'react-bootstrap';

import { Button, ButtonToolbar } from 'react-bootstrap';
import { AddTeamModal } from '../subcontainer/AddTeamModal';
import { EditTeamModal } from '../subcontainer/EditTeamModal';
import { Loader } from "../../components/Loader";
import "../../Styles/maincontainer/team.css";

export class Team extends Component {


    constructor(props) {
        super(props);
        this.state = { members: [], editModalShow: false, addModalShow: false, loading: true }
    }



    // refresh list
    refreshList() {
        fetch(process.env.REACT_APP_API + 'teams')
            .then(response => response.json())
            .then(data => {
                this.setState({ members: data, loading: false });
            });
    }

    componentDidMount() {
        this.refreshList();
    }

    componentDidUpdate() {
        this.refreshList();
        // this.setState({loading: false });
    }



    deletemember(memberid) {
        if (window.confirm('Are you sure')) {
            fetch(process.env.REACT_APP_API + 'teams/' + memberid, {
                method: 'DELETE',
                header: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                }
            })
        }
    }
    render() {

        // const {vposts}=this.state;

        const { members, memberid, membername, memberdes, photofilename } = this.state;
        let addModalClose = () => this.setState({ addModalShow: false });
        let editModalClose = () => this.setState({ editModalShow: false });
        return (
            <div className="row-container " >

                <div className="mt-5 d-flex justify-content-left">
                    <div className="container mt-2" >
                        <h3 className="text-center" >Team</h3>
                    </div>
                </div>


                <div className="team-container" >
                    {this.state.loading ?

                        <div className="justify-content-center"> <Loader /> </div> :


                        <div className="container-main-content"  >
                            <div className="col-container">
                                <div className="text-right mt-4">
                                    <Button variant="primary"
                                        onClick={() => this.setState({ addModalShow: true })}>
                                        Add member
                                    </Button>

                                    <AddTeamModal show={this.state.addModalShow}
                                        onHide={addModalClose} />
                                </div>
                            </div>

                            <div className="container-block "  >
                                <div className="main-containt"   >
                                    {members.map(member =>
                                        <div className="team-item" key={member.MembersId}>
                                            <Card className="team-card"  >

                                                <Card.Img variant="top" height={300} width={200} src={process.env.REACT_APP_PHOTOPATH + member.MembersPhoto} /><Card.Body>
                                                    <Card.Text disabled className="obj-display"> {member.MembersId} </Card.Text>
                                                    <Card.Title className="data-align">{member.MembersName}</Card.Title>
                                                    <Card.Text className="card-txt-team"> {member.MembersDescription} </Card.Text>
                                                    <ButtonToolbar>
                                                        <Button className="mr-2" variant="info"
                                                            onClick={() => this.setState({
                                                                editModalShow: true, memberid: member.MembersId,
                                                                membername: member.MembersName,
                                                                memberdes: member.MembersDescription,
                                                                photofilename: member.MembersPhoto
                                                            })}>
                                                            Edit
                                                        </Button>

                                                        <Button className="mr-2" variant="danger"
                                                            onClick={() => this.deletemember(member.MembersId)}>
                                                            Delete
                                                        </Button>

                                                        <EditTeamModal show={this.state.editModalShow}
                                                            onHide={editModalClose}
                                                            // const {members, memberid, membername, memberdes, memberphoto}=this.state;
                                                            memberid={memberid}
                                                            membername={membername}
                                                            memberdes={memberdes}
                                                            photofilename={photofilename} />

                                                    </ButtonToolbar>
                                                </Card.Body>
                                            </Card>
                                        </div>
                                    )}
                                </div>
                            </div>
                        </div>


                    }

                </div>
            </div>
        )
    }
}