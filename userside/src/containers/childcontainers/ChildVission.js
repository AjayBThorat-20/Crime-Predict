import React,{Component} from 'react';
import {Card} from 'react-bootstrap';


export class ChildVission extends Component{


    constructor(props){
        super(props);
        this.state = {visss:[]}

    }

    // refresh About list
    refreshList(){
        fetch(process.env.REACT_APP_API+'vission')
        .then(response =>response.json())
        .then(data =>{
            this.setState({visss:data});
        });
    }

    componentDidMount() {
        this.refreshList();
    }

    componentDidUpdate(){
        this.refreshList();
    }


    render(){

        const {visss}=this.state;

        return(
            <div>
             
                <h2>Vission</h2>
                {visss.map(viss=>
                <div key={viss.VissionId}>
                    {/* <Card.Title disabled>{abt.AboutId}</Card.Title> */}
                    <p>{viss.VissionInfo} </p>
                </div>
                )}

            </div>
        )
    }
}