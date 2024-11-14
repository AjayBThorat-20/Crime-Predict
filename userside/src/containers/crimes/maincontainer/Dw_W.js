import React,{Component} from 'react';
import { AbtDwW } from '../subcontainers/About/AbtDwW';
import { AnDwW } from '../subcontainers/Analysis/AnDwW';

export class Dw_W extends Component{

    render(){

        return(
            <><div className="mt-5 d-flex justify-content-left">
                <div className="container mt-2" >
                <h3 className="text-center" >District Wise Crime Commited Against Womans</h3>
                </div>
            </div>
            <AbtDwW />
            <AnDwW />
            </>
        )
    }
}