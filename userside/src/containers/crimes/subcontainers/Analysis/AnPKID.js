import React,{Component} from 'react';
import {Card} from 'react-bootstrap';
import "../../../../Styles/Crimes/Crimepage/CrimePageData.css";

import {SimpleLoader} from "../../../../components/SimpleLoader";

export class AnPKID extends Component{


    constructor(props){
        super(props);
        this.state = {an_pkids:[], loading: true}
// ,  editModalShow:false
    }

    

    // refresh department list
    refreshList(){
        fetch(process.env.REACT_APP_API+'analysis-pkid')
        .then(response =>response.json())
        .then(data =>{
            this.setState({an_pkids:data, loading:false});
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

        const {an_pkids}=this.state;
        return(
            <div className="main-containt">

            {this.state.loading ? 
            
            <div className="justify-content-center"> <SimpleLoader/> </div> : 

            <div className="container mt-5" >
                                
            <Card className="text-center">
            {/* <Card.Header>Analysis District Wise Crime Commited Against Pkid</Card.Header> */}
            {an_pkids.map(an_pkid=>
            <Card.Body key={an_pkid.An_PKID_Id}>
                <Card.Text disabled className="obj-display">{an_pkid.An_PKID_Id}</Card.Text>
                <Card.Title>{an_pkid.An_PKID_Title}</Card.Title>
                <Card.Img variant="top"  className="AnCrimeImg" src={process.env.REACT_APP_PHOTOPATH +an_pkid.An_PKID_Img} />
                <Card.Text> {an_pkid.An_PKID_Des} </Card.Text>

            </Card.Body>
            )}
            </Card>
        </div>}
        </div>
        )
    }
}