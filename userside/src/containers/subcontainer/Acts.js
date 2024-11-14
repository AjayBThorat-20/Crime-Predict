import React,{Component ,lazy,  Suspense } from 'react';
import { ActsScrap } from '../childcontainers/ActsScrap';

import "../../Styles/containers/subcontainer/title.css"

export class Acts extends Component{


    
    render(){

        return(
             <div className="container">
            <>
           
                <div className="mt-5 d-flex justify-content-center">
                    <div className="container mt-2" >
                <h2 className="txt-center" >Indian Acts And Rules</h2>
                </div>
                
                </div>
               
                <ActsScrap/>
                
                
            </>
            </div>
        )
    }
}