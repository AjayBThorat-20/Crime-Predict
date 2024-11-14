import React,{Component} from 'react';
import {Card} from 'react-bootstrap';

import {Button,ButtonToolbar} from 'react-bootstrap';
import {AddDwSCModal} from '../Analysis_Content/Add_Analysis/AddDwSCModal';
import {EditDwSCModal} from '../Analysis_Content/Edit_Analysis/EditDwSCModal';
import {SimpleLoader} from '../../../../components/SimpleLoader';
import '../../../../Styles/Crimes/Crimepage/CrimePageData.css';
export class AnDwSC extends Component{


    constructor(props){
        super(props);
        this.state = {an_dw_scs:[],addModalShow:false,editModalShow:false, loading:true}
// ,  editModalShow:false
    }

    

    // refresh department list
    refreshList(){
        fetch(process.env.REACT_APP_API+'analysis-dw-sc')
        .then(response =>response.json())
        .then(data =>{
            this.setState({an_dw_scs:data, loading:false});
        });
    }

    componentDidMount() {
        this.refreshList();
    }

    componentDidUpdate(){
        this.refreshList();
    }

    

    deletePost(an_dw_sc_id) {
        if (window.confirm('Are you sure')){
            fetch(process.env.REACT_APP_API+'analysis-dw-sc/'+ an_dw_sc_id,{
                method: 'DELETE',
                header:{'Accept': 'application/json',
            'Content-Type': 'application/json'}
            })
        }
    }
    
    render(){

        // const {vposts}=this.state;

        const {an_dw_scs, an_dw_sc_id, an_dw_sc_title, an_dw_sc_img, an_dw_sc_des}=this.state;
        let addModalClose=()=>this.setState({addModalShow:false});
        let editModalClose=()=>this.setState({editModalShow:false});

        
        
        return(
            <div>

            {this.state.loading ? 
            
            <div className="justify-content-center"> <SimpleLoader/> </div> :  
             
            <div className="container mt-5" >
                                
            <Card className="text-center">
            <Card.Header>Analysis District Wise Crime Commited Against SC</Card.Header>
            {an_dw_scs.map(an_dw_sc=>
            <Card.Body key={an_dw_sc.An_Dw_SC_Id} className="mt-2">
                <Card.Text  className="obj-display">{an_dw_sc.An_Dw_SC_Id}</Card.Text>
                <Card.Title>{an_dw_sc.An_Dw_SC_Title}</Card.Title>
                <Card.Img variant="top" className="AnCrimeImg mt-2" src={process.env.REACT_APP_PHOTOPATH +an_dw_sc.An_Dw_SC_Img} />
                <Card.Text className="mt-3"> {an_dw_sc.An_Dw_SC_Des} </Card.Text>

                <ButtonToolbar>

               
                    <Button className="mr-2" variant="info" 
                    onClick={() => this.setState({editModalShow:true,
                        an_dw_sc_id: an_dw_sc.An_Dw_SC_Id,
                        an_dw_sc_title: an_dw_sc.An_Dw_SC_Title,
                        an_dw_sc_img: an_dw_sc.An_Dw_SC_Img,
                        an_dw_sc_des: an_dw_sc.An_Dw_SC_Des
                })}>
                        Edit
                    </Button>



                    <Button className="mr-2" variant="danger"
                    onClick={() => this.deletePost(an_dw_sc.An_Dw_SC_Id)}>
                        Delete
                    </Button>
                   
                    <EditDwSCModal show={this.state.editModalShow}
                    onHide={editModalClose}
                    an_dw_sc_id={an_dw_sc_id}
                    an_dw_sc_title={an_dw_sc_title} 
                    an_dw_sc_img={an_dw_sc_img} 
                    an_dw_sc_des={an_dw_sc_des} 
                    />
                </ButtonToolbar>
            </Card.Body>
            )}
            </Card>
            

            <ButtonToolbar className="mt-4">
                <Button variant="primary"
                onClick={()=>this.setState({addModalShow:true})}>
                    Add Analysis info
                </Button>


                <AddDwSCModal show={this.state.addModalShow}
                onHide={addModalClose}/>
            </ButtonToolbar>
        </div>}
        </div>
        )
    }
}