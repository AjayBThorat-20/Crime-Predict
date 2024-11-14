import React,{Component} from 'react';
import {Card} from 'react-bootstrap';
import "../../../../Styles/Crimes/Crimepage/CrimePageData.css";

import {SimpleLoader} from "../../../../components/SimpleLoader";

export class AnDwChild extends Component{


    constructor(props){
        super(props);
        this.state = {an_dw_childs:[], loading: true}
// ,  editModalShow:false
    }

    

    // refresh department list
    refreshList(){
        fetch(process.env.REACT_APP_API+'analysis-dw-childs')
        .then(response =>response.json())
        .then(data =>{
            this.setState({an_dw_childs:data, loading:false});
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

        const {an_dw_childs}=this.state;
        let addModalClose=()=>this.setState({addModalShow:false});
        let editModalClose=()=>this.setState({editModalShow:false});
        return(
            <div className="main-containt">

            {this.state.loading ? 
            
            <div className="justify-content-center"> <SimpleLoader/> </div> : 

            <div className="container mt-5" >
                                
            <Card className="text-center">
            {/* <Card.Header>Analysis District Wise Crime Commited Against Childrens</Card.Header> */}
            {an_dw_childs.map(an_dw_child=>
            <Card.Body key={an_dw_child.An_Dw_Child_Id}>
                <Card.Text disabled className="obj-display">{an_dw_child.An_Dw_Child_Id}</Card.Text>
                <Card.Title>{an_dw_child.An_Dw_Child_Title}</Card.Title>
                <Card.Img variant="top" className="AnCrimeImg" src={process.env.REACT_APP_PHOTOPATH +an_dw_child.An_Dw_Child_Img} />
                <Card.Text> {an_dw_child.An_Dw_Child_Des} </Card.Text>

              
            </Card.Body>
            )}
            </Card>
        </div>}
        </div>
        )
    }
}