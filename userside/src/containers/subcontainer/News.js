import React,{Component ,lazy,  Suspense } from 'react';
import { NewsScrap } from '../childcontainers/NewsScrap';

import "../../Styles/containers/subcontainer/title.css"

export class News extends Component{


    
    render(){

        return(
             <div className="container">
            <>
           
                <div className="mt-5 d-flex justify-content-center">
                    <div className="container mt-2" >
                <h2 className="txt-center" >Recent News </h2>
                </div>
                
                </div>
               
                <NewsScrap/>
                
                
            </>
            </div>
        )
    }
}