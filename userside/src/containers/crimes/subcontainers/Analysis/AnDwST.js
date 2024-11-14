import React,{Component} from 'react';
import {Card} from 'react-bootstrap';

import "../../../../Styles/Crimes/Crimepage/CrimePageData.css";

import {SimpleLoader} from "../../../../components/SimpleLoader";

export class AnDwST extends Component{


    constructor(props){
        super(props);
        this.state = {an_dw_sts:[], loading: true}
// ,  editModalShow:false
    }
    // refresh department list
    refreshList(){
        fetch(process.env.REACT_APP_API+'analysis-dw-st')
        .then(response =>response.json())
        .then(data =>{
            this.setState({an_dw_sts:data, loading:false});
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

        const {an_dw_sts}=this.state;
        return(
            <div className="main-containt">

            {this.state.loading ? 
            
            <div className="justify-content-center"> <SimpleLoader/> </div> : 

            <div className="container mt-5" >
                                
            <Card className="text-center">
            {/* <Card.Header>About District Wise Crime Commited Against ST</Card.Header> */}
            {an_dw_sts.map(an_dw_st=>
            <Card.Body key={an_dw_st.An_Dw_ST_Id}>
                <Card.Text disabled className="obj-display">{an_dw_st.An_Dw_ST_Id}</Card.Text>
                <Card.Title>{an_dw_st.An_Dw_ST_Title}</Card.Title>
                <Card.Img variant="top"  className="AnCrimeImg" src={process.env.REACT_APP_PHOTOPATH +an_dw_st.An_Dw_ST_Img} />
                <Card.Text> {an_dw_st.An_Dw_ST_Des} </Card.Text>

            </Card.Body>
            )}
            </Card>
        </div>}
        </div>
        )
    }
}