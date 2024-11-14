import React,{Component} from 'react';
import {Card} from 'react-bootstrap';

import "../../../../Styles/Crimes/Crimepage/CrimePageData.css";

import {SimpleLoader} from "../../../../components/SimpleLoader";

export class AnDwSC extends Component{


    constructor(props){
        super(props);
        this.state = {an_dw_scs:[], loading: true}
// ,  editModalShow:false
    }

    

    // refresh department list
    refreshList(){
        fetch(process.env.REACT_APP_API+'analysis-dw-sc')
        .then(response =>response.json())
        .then(data =>{
            this.setState({an_dw_scs:data, loading:false});
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

        const {an_dw_scs}=this.state;
        return(
            <div className="main-containt ">

            {this.state.loading ? 
            
            <div className="justify-content-center"> <SimpleLoader/> </div> : 

            <div className="container mt-5" >
                                
            <Card className="text-center">
            {/* <Card.Header>About District Wise Crime Commited Against SC</Card.Header> */}
            {an_dw_scs.map(an_dw_sc=>
            <Card.Body key={an_dw_sc.An_Dw_SC_Id}>
                <Card.Text disabled className="obj-display">{an_dw_sc.An_Dw_SC_Id}</Card.Text>
                <Card.Title className="mt-0 ">{an_dw_sc.An_Dw_SC_Title}</Card.Title>
                <Card.Img variant="top"  className="AnCrimeImg mt-3" src={process.env.REACT_APP_PHOTOPATH +an_dw_sc.An_Dw_SC_Img} />
                <Card.Text className="mt-3"> {an_dw_sc.An_Dw_SC_Des} </Card.Text>
                {/* <hr/> */}

               
            </Card.Body>
            )}
            </Card>
        </div>}
        </div>
        )
    }
}