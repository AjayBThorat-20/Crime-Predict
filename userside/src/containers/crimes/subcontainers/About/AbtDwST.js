import React,{Component} from 'react';
import {Card} from 'react-bootstrap';

import "../../../../Styles/Crimes/Crimepage/CrimePageData.css";

import {SimpleLoader} from "../../../../components/SimpleLoader";

export class AbtDwST extends Component{


    constructor(props){
        super(props);
        this.state = {abt_dw_sts:[], loading: true}
// ,  editModalShow:fal
    }

    

    // refresh department list
    refreshList(){
        fetch(process.env.REACT_APP_API+'about-dw-st')
        .then(response =>response.json())
        .then(data =>{
            this.setState({abt_dw_sts:data, loading:false});
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

        const {abt_dw_sts}=this.state;

        return(
            <div className="main-containt">

            {this.state.loading ? 
            
            <div className="justify-content-center"> <SimpleLoader/> </div> : 
            <div className="container mt-5" >
                                
            <Card className="text-center">
            {/* <Card.Header>About District Wise Crime Commited Against ST</Card.Header> */}
            {abt_dw_sts.map(abt_dw_st=>
            <Card.Body key={abt_dw_st.Abt_Dw_ST_Id}>
                <Card.Text disabled className="obj-display">{abt_dw_st.Abt_Dw_ST_Id}</Card.Text>
                <Card.Title>{abt_dw_st.Abt_Dw_ST_Title}</Card.Title>
                <Card.Img variant="top"  className="AbtCrimeImg" src={process.env.REACT_APP_PHOTOPATH +abt_dw_st.Abt_Dw_ST_Img} />
                <Card.Text> {abt_dw_st.Abt_Dw_ST_Des} </Card.Text>
              
            </Card.Body>
            )}
            </Card>
        </div>}
        </div>
        )
    }
}