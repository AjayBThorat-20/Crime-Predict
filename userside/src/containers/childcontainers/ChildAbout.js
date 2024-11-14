import React,{Component} from 'react';
import {Card} from 'react-bootstrap';

export class ChildAbout extends Component{


    constructor(props){
        super(props);
        this.state = {abts:[]}

    }

    // refresh About list
    refreshList(){
        fetch(process.env.REACT_APP_API+'about')
        .then(response =>response.json())
        .then(data =>{
            this.setState({abts:data});
        });
    }

    componentDidMount() {
        this.refreshList();
    }

    componentDidUpdate(){
        this.refreshList();
    }

    render(){

        const {abts}=this.state;
        return(
            <div className="container mt-5" >
                                
               <h2>About</h2>
                {abts.map(abt=>
                <div key={abt.AboutId}>
                    {/* <Card.Title disabled>{abt.AboutId}</Card.Title> */}
                    <p>{abt.AboutInfo} </p>
                </div>
                )}
               
            </div>
        )
    }
}