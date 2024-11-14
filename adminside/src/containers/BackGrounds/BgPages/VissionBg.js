import React, { Component } from 'react';
import { Card } from 'react-bootstrap';

import { Button, ButtonToolbar } from 'react-bootstrap';
import { AddVissionBgModal } from '../BgModals/AddVissionBgModal';
import { EditVissionBgModal } from '../BgModals/EditVissionBgModal';
import { Loader } from "../../../components/Loader";

export class VissionBg extends Component {


    constructor(props) {
        super(props);
        this.state = { vissbgs: [], editModalShow: false, addModalShow: false, loading: true}
        // ,addModalShow:false,  editModalShow:false
    }



    // refresh department list
    refreshList() {
        fetch(process.env.REACT_APP_API + 'vissionbg')
            .then(response => response.json())
            .then(data => {
                this.setState({ vissbgs: data, loading: false});
            });
    }

    componentDidMount() {
        this.refreshList();
    }

    componentDidUpdate() {
        this.refreshList();
    }



    deletevissbg(vissbgid) {
        if (window.confirm('Are you sure')) {
            fetch(process.env.REACT_APP_API + 'vissionbg/' + vissbgid, {
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

        const { vissbgs, vissbgid, vissbgFile } = this.state;
        let addModalClose = () => this.setState({ addModalShow: false });
        let editModalClose = () => this.setState({ editModalShow: false });
        return (
            <div>
                <div className="mt-5 d-flex justify-content-left">
                    <div className="container mt-2" >
                <h3 className="text-center" >Vission Background</h3>
                </div>
                </div>


            {this.state.loading ? 
            
            <div className="justify-content-center"> <Loader/> </div> :  
             
            <div className="container" >

                <div className="text-right mt-4">
                        <Button variant="primary"
                            onClick={() => this.setState({ addModalShow: true })}>
                            Add Background
                        </Button>


                        <AddVissionBgModal show={this.state.addModalShow}
                            onHide={addModalClose} />
                </div>

                <div className="textAlign" style={{widht:'100%',textAlign: 'center',justifyContent: 'center'}} >
                {vissbgs.map(vissbg =>
                    <Card style={{  marginTop: '20px', hovered: true}} className="ml-3 mr-3 " key={vissbg.VissionBgId}>
                        <Card.Header>Add Background for Vission Carousel</Card.Header>
                        <Card.Body>
                            <Card.Img variant="top" height={400} width={200} src={process.env.REACT_APP_PHOTOPATH + vissbg.VissionBgPhoto} />
                        </Card.Body>
                        <Card.Footer className="text-muted">
                            <ButtonToolbar>
                                <Button className="mr-2" variant="info"
                                    onClick={() => this.setState({
                                        editModalShow: true, vissbgid: vissbg.VissionBgId,
                                        vissbgFile: vissbg.VissionBgPhoto
                                    })}>
                                    Edit Backgroung
                                </Button>



                                <Button className="mr-2" variant="danger"
                                    onClick={() => this.deletevissbg(vissbg.VissionBgId)}>
                                    Delete
                                </Button>



                                <EditVissionBgModal show={this.state.editModalShow}
                                    onHide={editModalClose}
                                    vissbgid={vissbgid}
                                    vissbgFile={vissbgFile}


                                />

                            </ButtonToolbar>
                        </Card.Footer>
                    </Card>
                )}
            </div>
            </div>}
            </div>
        )
    }
}