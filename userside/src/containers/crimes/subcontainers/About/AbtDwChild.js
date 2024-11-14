import React,{Component} from 'react';
import {Card} from 'react-bootstrap';

import "../../../../Styles/Crimes/Crimepage/CrimePageData.css";

import {SimpleLoader} from "../../../../components/SimpleLoader";

export class AbtDwChild extends Component{


    constructor(props){
        super(props);
        this.state = {abt_dw_childs:[], loading: true}
// ,  editModalShow:false
    }

    

    // refresh department list
    refreshList(){
        fetch(process.env.REACT_APP_API+'about-dw-childs')
        .then(response =>response.json())
        .then(data =>{
            this.setState({abt_dw_childs:data , loading:false});
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

        const {abt_dw_childs}=this.state;
        return(


            
            <div className="main-containt">

            {this.state.loading ? 
            
            <div className="justify-content-center"> <SimpleLoader/> </div> : 

            <div className="container mt-5" >
                   
                            
            <Card className="text-center" >
          {/* <Card.Header>About District Wise Crime Commited Against Childrens</Card.Header> */}
          {abt_dw_childs.map(abt_dw_child=> 
            <Card.Body key={abt_dw_child.Abt_Dw_Child_Id} >
                <Card.Text disabled className="obj-display">{abt_dw_child.Abt_Dw_Child_Id}</Card.Text>
                <Card.Title>{abt_dw_child.Abt_Dw_Child_Title}</Card.Title>
                <Card.Img variant="top" className="AbtCrimeImg" src={process.env.REACT_APP_PHOTOPATH+abt_dw_child.Abt_Dw_Child_Img} ></Card.Img>
                <Card.Text> {abt_dw_child.Abt_Dw_Child_Des} </Card.Text>

            </Card.Body>)}
            
            </Card>
        </div>
        }
        </div>
        
        )
    }
}