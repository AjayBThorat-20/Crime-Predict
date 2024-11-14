import React,{Component} from 'react';
import { AbtDwChild } from '../subcontainers/About/AbtDwChild';
import { AnDwChild } from '../subcontainers/Analysis/AnDwChild';



export class Dw_Child extends Component{
    
    render(){

        return(
            
            <>
                <div className="mt-5 d-flex justify-content-left">
                    <div className="container mt-2" >
                <h3 className="text-center" >District Wise Crime Commited Against Childrens</h3>
                </div>
                
                </div><AbtDwChild />
                <AnDwChild />
            </>
        )
    }
}