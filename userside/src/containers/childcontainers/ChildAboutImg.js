import React,{Component} from 'react';
import {Table ,Image} from 'react-bootstrap';


export class ChildAboutImg extends Component{


    constructor(props){
        super(props);
        this.state = {abtbgs:[]}
    }

    

    // refresh AboutBgImg 
    refreshList(){
        fetch(process.env.REACT_APP_API+'aboutbg')
        .then(response =>response.json())
        .then(data =>{
            this.setState({abtbgs: data});
        });
    }

    componentDidMount() {
        this.refreshList();
    }

    componentDidUpdate(){
        this.refreshList();
    }

    

    render(){


        const {abtbgs}=this.state;
     
        return(
            <div className="container" >
                
                       {abtbgs.map(abtbg=>
                            // <tr 
                            <div    key={abtbg.AboutBgId}>
                                {/* <td style={{textAlign: 'center'}}> */}
                                <Image height={500} width={300} className="d-block w-100" alt="AboutImg"  src={process.env.REACT_APP_PHOTOPATH+abtbg.AboutBgPhoto} />
                                </div>
                                )}
                                
            </div>
        )
    }
}