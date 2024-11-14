import React,{Component} from 'react';
import {Card} from 'react-bootstrap';

import "../../../../Styles/Crimes/Crimepage/CrimePageData.css";

import {SimpleLoader} from "../../../../components/SimpleLoader";

export class AbtPKID extends Component{


    constructor(props){
        super(props);
        this.state = {abt_pkids:[], loading: true}
// ,  editModalShow:false
    }

    

    // refresh department list
    refreshList(){
        fetch(process.env.REACT_APP_API+'about-pkid')
        .then(response =>response.json())
        .then(data =>{
            this.setState({abt_pkids:data, loading:false});
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

        const {abt_pkids}=this.state;
        return(
            <div className="main-containt">

            {this.state.loading ? 
            
            <div className="justify-content-center"> <SimpleLoader/> </div> : 

            <div className="container mt-5" >
                                
            <Card className="text-center">
            {/* <Card.Header>About District Wise Crime Commited Against Womans</Card.Header> */}
            {abt_pkids.map(abt_pkid=>
            <Card.Body key={abt_pkid.Abt_PKID_Id}>
                <Card.Text disabled className="obj-display">{abt_pkid.Abt_PKID_Id}</Card.Text>
                <Card.Title>{abt_pkid.Abt_PKID_Title}</Card.Title>
                <Card.Img variant="top" className="AbtCrimeImg" src={process.env.REACT_APP_PHOTOPATH +abt_pkid.Abt_PKID_Img} />
                <Card.Text> {abt_pkid.Abt_PKID_Des} </Card.Text>

                
            </Card.Body>
            )}
            </Card>
        </div>}
        </div>
        )
    }
}