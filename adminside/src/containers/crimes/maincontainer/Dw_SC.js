import React,{Component} from 'react';
import { AbtDwSC } from '../subcontainers/About/AbtDwSC';
import { AnDwSC } from '../subcontainers/Analysis/AnDwSC';
export class Dw_SC extends Component{

    render(){

        return(
            <><div className="mt-5 d-flex justify-content-left">
               <div className="container mt-2" >
                <h3 className="text-center" >District Wise Crime Commited Against SC</h3>
                </div>
            </div>
            <AbtDwSC />
            <AnDwSC />
            </>
        )
    }
}