import React,{Component} from 'react';
import { AbtDwST } from '../subcontainers/About/AbtDwST';
import { AnDwST } from '../subcontainers/Analysis/AnDwST';

export class Dw_ST extends Component{

    render(){

        return(
            <><div className="mt-5 d-flex justify-content-left">
                  <div className="container mt-2" >
                <h3 className="text-center" >District Wise Crime Commited Against ST</h3>
                </div>
            </div><AbtDwST /><AnDwST /></>

        )
    }
}