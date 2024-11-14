import React,{Component} from 'react';
import { AbtDwIPC } from '../subcontainers/About/AbtDwIPC';
import { AnDwIPC } from '../subcontainers/Analysis/AnDwIPC';

export class Dw_IPC extends Component{

    render(){

        return(
            <><div className="mt-5 d-flex justify-content-left">
                   <div className="container mt-2" >
                <h3 className="text-center" >District Wise Crime Commited Against IPC</h3>
                </div>
            </div>

            <AbtDwIPC/>
            <AnDwIPC/></>
        )
    }
}