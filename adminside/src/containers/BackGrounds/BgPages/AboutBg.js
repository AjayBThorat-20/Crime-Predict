import React, { Component } from 'react';
import { Card } from 'react-bootstrap';

import { Button, ButtonToolbar } from 'react-bootstrap';
import { AddAboutBgModal } from '../BgModals/AddAboutBgModal';
import { EditAboutBgModal } from '../BgModals/EditAboutBgModal';
import { Loader } from "../../../components/Loader";

export class AboutBg extends Component {


    constructor(props) {
        super(props);
        this.state = { abtbgs: [], editModalShow: false, addModalShow: false, loading: true}
        // ,addModalShow:false,  editModalShow:false
    }



    // refresh department list
    refreshList() {
        fetch(process.env.REACT_APP_API + 'aboutbg')
            .then(response => response.json())
            .then(data => {
                this.setState({ abtbgs: data, loading: false });
            });
    }

    componentDidMount() {
        this.refreshList();
    }

    componentDidUpdate() {
        this.refreshList();
    }



    deleteabtbg(abtbgid) {
        if (window.confirm('Are you sure')) {
            fetch(process.env.REACT_APP_API + 'aboutbg/' + abtbgid, {
                method: 'DELETE',
                header: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                }
            })
        }
    }
    render() {


        const { abtbgs, abtbgid, abtbgFile } = this.state;
        let addModalClose = () => this.setState({ addModalShow: false });
        let editModalClose = () => this.setState({ editModalShow: false });
        return (
            <div>


<div className="mt-5 d-flex justify-content-left">
                    <div className="container mt-2" >
                <h3 className="text-center" >About Background</h3>
                </div>
                </div>

            {this.state.loading ? 
            
            <div className="justify-content-center" > <Loader/> </div> :  
             
            <div className="container" >

                <div className="text-right mt-4">
                    <Button variant="primary"
                        onClick={() => this.setState({ addModalShow: true })}>
                        Add Background
                    </Button>


                    <AddAboutBgModal show={this.state.addModalShow}
                        onHide={addModalClose} />
                </div>

                
                <div className="about-main-bg" >
                    <div className="textAlign"style={{widht:'100%',textAlign: 'center',justifyContent: 'center'}} >
                        {abtbgs.map(abtbg =>
                            <Card style={{ marginTop: '20px', hovered: true}} className="ml-3 mr-3 " key={abtbg.AboutBgId}>
                                 <Card.Header>Add Background for About Carousel</Card.Header>
                        <Card.Body>
                        <Card.Img variant="top" height={400} width={200} src={process.env.REACT_APP_PHOTOPATH + abtbg.AboutBgPhoto} />
                        </Card.Body>
                        <Card.Footer className="text-muted">
                                    <ButtonToolbar>
                                        <Button className="mr-2" variant="info"
                                            onClick={() => this.setState({
                                                editModalShow: true, abtbgid: abtbg.AboutBgId,
                                                abtbgFile: abtbg.AboutBgPhoto
                                            })}>
                                            Edit Backgroung
                                        </Button>



                                        <Button className="mr-2" variant="danger"
                                            onClick={() => this.deleteabtbg(abtbg.AboutBgId)}>
                                            Delete
                                        </Button>



                                        <EditAboutBgModal show={this.state.editModalShow}
                                            onHide={editModalClose}
                                            abtbgid={abtbgid}
                                            abtbgFile={abtbgFile}


                                        />

                                    </ButtonToolbar>

                                </Card.Footer>
                            </Card>)}
                    </div>
                </div>
                </div>}
                
            </div >
        )
    }
}