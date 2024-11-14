import React,{Component} from 'react';
import {Table ,Image} from 'react-bootstrap';


export class ChildVissionImg extends Component{


    constructor(props) {
        super(props);
        this.state = { vissbgs: [], editModalShow: false, addModalShow: false }
        // ,addModalShow:false,  editModalShow:false
    }



    // refresh department list
    refreshList() {
        fetch(process.env.REACT_APP_API + 'vissionbg')
            .then(response => response.json())
            .then(data => {
                this.setState({ vissbgs: data });
            });
    }

    componentDidMount() {
        this.refreshList();
    }

    componentDidUpdate() {
        this.refreshList();
    }
    

    render(){


        const { vissbgs}=this.state;
     
        return(
            <div className="container" >
                
                {vissbgs.map(vissbg =>
                            // <tr 
                            <div  key={vissbg.VissionBgId}>
                                {/* <td style={{textAlign: 'center'}}> */}
                                <Image height={500} width={300} className="d-block w-100" alt="VissionImg"  src={process.env.REACT_APP_PHOTOPATH+vissbg.VissionBgPhoto} />
                                </div>
                                )}
                                
            </div>
        )
    }
}