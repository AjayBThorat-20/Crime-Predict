import React,{Component} from 'react';
import {Card} from 'react-bootstrap';

import {Button,ButtonToolbar} from 'react-bootstrap';
import {AddAboutModal} from '../subcontainer/AddAboutModal';
import {EditAboutModal} from '../subcontainer/EditAboutModal';
import { Loader } from "../../components/Loader";


export class About extends Component{


    constructor(props){
        super(props);
        this.state = {abts:[],addModalShow:false,  editModalShow:false , loading: true}

    }

    // refresh About list
    refreshList(){
        fetch(process.env.REACT_APP_API+'about')
        .then(response =>response.json())
        .then(data =>{
            this.setState({abts:data, loading: false});
        });
    }

    componentDidMount() {
        this.refreshList();
    }

    componentDidUpdate(){
        this.refreshList();
    }

    deleteabt(abtid) {
        if (window.confirm('Are you sure')){
            fetch(process.env.REACT_APP_API+'about/'+ abtid,{
                method: 'DELETE',
                header:{'Accept': 'application/json',
            'Content-Type': 'application/json'}
            })
        }
    }
    render(){

        const {abts, abtid, abtinfo}=this.state;
        let addModalClose=()=>this.setState({addModalShow:false});
        let editModalClose=()=>this.setState({editModalShow:false});
        return(

            <div className="main">

                <div className="mt-5 d-flex justify-content-left">
                    <div className="container mt-2" >
                <h3 className="text-center" >About Information </h3>
                </div>
                </div>

            {this.state.loading ? 
            
            <div className="justify-content-center"> <Loader/> </div> :  
             
            
            <div className="container mt-5" >
                                
                <Card className="text-center">
                <Card.Header>About</Card.Header>
                {abts.map(abt=>
                <Card.Body key={abt.AboutId}>
                    {/* <Card.Title disabled>{abt.AboutId}</Card.Title> */}
                    <Card.Text className="abt-card-txt">{abt.AboutInfo} </Card.Text>
                    <ButtonToolbar>
                        <Button className="mr-2" variant="info"
                        onClick={() => this.setState({editModalShow:true,abtid:abt.AboutId,abtinfo:abt.AboutInfo})}>
                            Edit
                        </Button>



                        <Button className="mr-2" variant="danger"
                        onClick={() => this.deleteabt(abt.AboutId)}>
                            Delete
                        </Button>

                        <EditAboutModal show={this.state.editModalShow}
                        onHide={editModalClose}
                        abtid={abtid}
                        abtinfo={abtinfo} />
                    </ButtonToolbar>
                </Card.Body>
                )}
                </Card>
                

                <ButtonToolbar className="mt-4">
                    <Button variant="primary"
                    onClick={()=>this.setState({addModalShow:true})}>
                        Add About info
                    </Button>


                    <AddAboutModal show={this.state.addModalShow}
                    onHide={addModalClose}/>
                </ButtonToolbar>
                </div>}
            </div>
        )
    }
}