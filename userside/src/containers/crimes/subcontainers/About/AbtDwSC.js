import React,{Component} from 'react';
import {Card} from 'react-bootstrap';

import "../../../../Styles/Crimes/Crimepage/CrimePageData.css";

import {SimpleLoader} from "../../../../components/SimpleLoader";

export class AbtDwSC extends Component{


    constructor(props){
        super(props);
        this.state = {abt_dw_scs:[], loading: true}
// ,  editModalShow:false
    }

    

    // refresh department list
    refreshList(){
        fetch(process.env.REACT_APP_API+'about-dw-sc')
        .then(response =>response.json())
        .then(data =>{
            this.setState({abt_dw_scs:data, loading:false});
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

        const {abt_dw_scs}=this.state;
       
        return(

            <div className="main-containt">

            {this.state.loading ? 
            
            <div className="justify-content-center"> <SimpleLoader/> </div> : 
            <div className="container mt-5" >
                                
            <Card className="text-center">
            {/* <Card.Header>About District Wise Crime Commited Against SC</Card.Header> */}
            {abt_dw_scs.map(abt_dw_sc=>
            <Card.Body key={abt_dw_sc.Abt_Dw_SC_Id}>
                <Card.Text disabled className="obj-display">{abt_dw_sc.Abt_Dw_SC_Id}</Card.Text>
                <Card.Title>{abt_dw_sc.Abt_Dw_SC_Title}</Card.Title>
                <Card.Img variant="top" className="AbtCrimeImg" src={process.env.REACT_APP_PHOTOPATH +abt_dw_sc.Abt_Dw_SC_Img} />
                <Card.Text> {abt_dw_sc.Abt_Dw_SC_Des} </Card.Text>

            </Card.Body>
            )}
            </Card>
           </div>}
        </div>
        )
    }
}