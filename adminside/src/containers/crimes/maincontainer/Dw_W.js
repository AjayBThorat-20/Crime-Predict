import React,{Component} from 'react';
import { AbtDwW } from '../subcontainers/About/AbtDwW';
import { AnDwW } from '../subcontainers/Analysis/AnDwW';

export class Dw_W extends Component{


           // refresh department list
        // refreshList(){
        //     fetch(process.env.REACT_APP_API+'analysis-dw-w')
        //     .then(response =>response.json())
        //     .then(data =>{
        //         this.setState({an_dw_ws:data});
        //     });
        // }
    
        // componentDidMount() {
        //     this.refreshList();
        //     setInterval(this.refreshList, 5000);
        // }
    
     
    
    render(){

        return(
            <><div className="mt-5 d-flex justify-content-left">
                <div className="container mt-2" >
                <h3 className="text-center" >District Wise Crime Commited Against Women</h3>
                </div>
            </div>
            <AbtDwW />
            <AnDwW />
            </>
        )
    }
}