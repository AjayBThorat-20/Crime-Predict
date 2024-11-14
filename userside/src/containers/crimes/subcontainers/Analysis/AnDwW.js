import React,{Component} from 'react';
import {Card} from 'react-bootstrap';
import "../../../../Styles/Crimes/Crimepage/CrimePageData.css";

import {SimpleLoader} from "../../../../components/SimpleLoader";

export class AnDwW extends Component{


    constructor(props){
        super(props);
        this.state = {an_dw_ws:[], loading: true}
// ,  editModalShow:false
    }


     // refresh department list
     refreshList(){
        fetch(process.env.REACT_APP_API+'analysis-dw-w')
        .then(response =>response.json())
        .then(data =>{
            this.setState({an_dw_ws:data, loading: false});
        });
    }


    componentDidMount() {
        this.refreshList();
    }

    componentDidUpdate(){
        this.refreshList();
    }

    
    render(){

        // const {vposts}=this.state;

        const {an_dw_ws}=this.state;
        return(
            <div className="main-containt">

            {this.state.loading ? 
            
            <div className="justify-content-center"> <SimpleLoader/> </div> : 

            <div className="container mt-5" >
                                
            <Card className="text-center">
            {/* <Card.Header>About District Wise Crime Commited Against Womans</Card.Header> */}
            {an_dw_ws.map(an_dw_w=>
            <Card.Body key={an_dw_w.An_Dw_W_Id}>
                <Card.Text disabled className="obj-display">{an_dw_w.An_Dw_W_Id}</Card.Text>
                <Card.Title>{an_dw_w.An_Dw_W_Title}</Card.Title>
                <Card.Img variant="top"  className="AnCrimeImg" src={process.env.REACT_APP_PHOTOPATH +an_dw_w.An_Dw_W_Img} />
                <Card.Text> {an_dw_w.An_Dw_W_Des} </Card.Text>

            
            </Card.Body>
            )}
            </Card>
        </div>}
        </div>
        )
    }
}