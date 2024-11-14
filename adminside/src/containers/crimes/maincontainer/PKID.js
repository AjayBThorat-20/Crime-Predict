import React,{Component} from 'react';
import { AbtPKID } from '../subcontainers/About/AbtPKID';
import { AnPKID } from '../subcontainers/Analysis/AnPKID';

export class PKID extends Component{

    render(){

        return(
            <><div className="mt-5 d-flex justify-content-left">
                <div className="container mt-2" >
                <h3 className="text-center" >Police killed or injured on duty</h3>
                </div>
            </div>
            <AbtPKID />
            <AnPKID />
            </>
        )
    }
}