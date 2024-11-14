import React, { Component } from 'react';
import { Card } from 'react-bootstrap';

import { Button, ButtonToolbar } from 'react-bootstrap';
import { DisplayTeamModal } from '../childcontainers/DisplayTeamModal';
import { Loader } from "../../components/Loader";
import "../../Styles/maincontainer/team.css";

export class Team extends Component {


    constructor(props) {
        super(props);
        this.state = { members: [], displayModalShow: false, loading: true }
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


    render() {

        // const {vposts}=this.state;

        const { members, memberid, membername, memberdes, photofilename } = this.state;
        let displayModalClose = () => this.setState({ displayModalShow: false });
        return (
            <div className="row-container " >

            <div className="mt-5 d-flex justify-content-left">
                <div className="container mt-2" >
                    <h3 className="txt-center" >Team</h3>
                </div>
            </div>


            <div className="team-container" >
                {this.state.loading ?

                    <div className="justify-content-center"> <Loader /> </div> :


                    <div className="container-main-content"  >
                    <div className="main-container">
                        <div className="container-block "  >
                            <div className="main-containt"   >
                                {members.map(member =>
                                    <div className="team-item" key={member.MembersId}>
                                        <Card className="team-card"  >

                                            <Card.Img variant="top" className="image" height={300} width={200} src={process.env.REACT_APP_PHOTOPATH + member.MembersPhoto} />
                                                <Card.ImgOverlay className="middle">
                                                    <ButtonToolbar>
                                                        <Button className="button1 textAlign mr-2" variant="info" 
                                                            onClick={() => this.setState({
                                                                displayModalShow: true, memberid: member.MembersId,
                                                                membername: member.MembersName,
                                                                memberdes: member.MembersDescription,
                                                                photofilename: member.MembersPhoto
                                                            })}>
                                                            {member.MembersName}
                                                        </Button>



                                                        <DisplayTeamModal show={this.state.displayModalShow}
                                                            onHide={displayModalClose}
                                                            // const {members, memberid, membername, memberdes, memberphoto}=this.state;
                                                            memberid={memberid}
                                                            membername={membername}
                                                            memberdes={memberdes}
                                                            photofilename={photofilename} />

                                                    </ButtonToolbar>

                                                </Card.ImgOverlay>
                                            </Card>
                                        </div>
                                    )}
                                </div>
                            </div>
                        </div>

                    </div>
                    }

                </div>
            </div>
        )
    }
}