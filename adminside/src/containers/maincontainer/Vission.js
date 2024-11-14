import React,{Component} from 'react';
import {Card} from 'react-bootstrap';

import {Button,ButtonToolbar} from 'react-bootstrap';
import {AddVissionModal} from '../subcontainer/AddVissionModal';
import {EditVissionModal} from '../subcontainer/EditVissionModal';
import { Loader } from "../../components/Loader";

export class Vission extends Component{


    constructor(props){
        super(props);
        this.state = {visss:[],addModalShow:false,  editModalShow:false, loading: true}

    }

    // refresh About list
    refreshList(){
        fetch(process.env.REACT_APP_API+'vission')
        .then(response =>response.json())
        .then(data =>{
            this.setState({visss:data, loading: false});
        });
    }

    componentDidMount() {
        this.refreshList();
    }

    componentDidUpdate(){
        this.refreshList();
    }

    deleteabt(vissid) {
        if (window.confirm('Are you sure')){
            fetch(process.env.REACT_APP_API+'vission/'+ vissid,{
                method: 'DELETE',
                header:{'Accept': 'application/json',
            'Content-Type': 'application/json'}
            })
        }
    }
    render(){

        const {visss, vissid, vissinfo}=this.state;
        let addModalClose=()=>this.setState({addModalShow:false});
        let editModalClose=()=>this.setState({editModalShow:false});
        return(

            <div>

<div className="mt-5 d-flex justify-content-left">
                    <div className="container mt-2" >
                <h3 className="text-center" >Vission Information</h3>
                </div>
                </div>

            {this.state.loading ? 
            
            <div className="justify-content-center"> <Loader/> </div> :  
             
            <div className="container mt-5" >
                 <Card className="text-center">
                <Card.Header>Vission</Card.Header>
                {visss.map(viss=>
                <Card.Body key={viss.VissionId}>
                    {/* <Card.Title disabled>{viss.VissionId}</Card.Title> */}
                    <Card.Text>{viss.VissionInfo} </Card.Text>
                    <ButtonToolbar>
                        <Button className="mr-2" variant="info"
                        onClick={() => this.setState({editModalShow:true,vissid:viss.VissionId,vissinfo:viss.VissionInfo})}>
                            Edit
                        </Button>



                        <Button className="mr-2" variant="danger"
                        onClick={() => this.deleteabt(viss.VissionId)}>
                            Delete
                        </Button>

                        <EditVissionModal show={this.state.editModalShow}
                        onHide={editModalClose}
                        vissid={vissid}
                        vissinfo={vissinfo} />
                    </ButtonToolbar>
                </Card.Body>
                )}
                </Card>
                

                <ButtonToolbar className="mt-4">
                    <Button variant="primary"
                    onClick={()=>this.setState({addModalShow:true})}>
                        Add Vission info
                    </Button>


                    <AddVissionModal show={this.state.addModalShow}
                    onHide={addModalClose}/>
                </ButtonToolbar>
                </div>}
            </div>
        )
    }
}