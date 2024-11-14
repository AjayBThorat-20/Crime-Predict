import React,{Component} from 'react';
import {Card} from 'react-bootstrap';

import {Button,ButtonToolbar} from 'react-bootstrap';
import {AddDwWModal} from '../About_Content/Add_About/AddDwWModal';
import {EditDwWModal} from '../About_Content/Edit_About/EditDwWModal';
import {SimpleLoader} from '../../../../components/SimpleLoader';
import '../../../../Styles/Crimes/Crimepage/CrimePageData.css';
export class AbtDwW extends Component{


    constructor(props){
        super(props);
        this.state = {abt_dw_ws:[],addModalShow:false,editModalShow:false, loading: true}
// ,  editModalShow:false
    }

    

    // refresh department list
    refreshList(){
        fetch(process.env.REACT_APP_API+'about-dw-w')
        .then(response =>response.json())
        .then(data =>{
            this.setState({abt_dw_ws:data, loading: false});
        });
    }

    componentDidMount() {
        this.refreshList();
    }

    componentDidUpdate(){
        this.refreshList();
    }

    

    deleteabt(abt_dw_w_id) {
        if (window.confirm('Are you sure')){
            fetch(process.env.REACT_APP_API+'about-dw-w/'+ abt_dw_w_id,{
                method: 'DELETE',
                header:{'Accept': 'application/json',
            'Content-Type': 'application/json'}
            })
        }
    }
    
    render(){

        // const {vposts}=this.state;

        const {abt_dw_ws, abt_dw_w_id, abt_dw_w_title, abt_dw_w_img, abt_dw_w_des}=this.state;
        let addModalClose=()=>this.setState({addModalShow:false});
        let editModalClose=()=>this.setState({editModalShow:false});
        return(
            <div>

            {this.state.loading ? 
            
            <div className="justify-content-center"> <SimpleLoader/> </div> :  
             
            <div className="container mt-5" >
                                
            <Card className="text-center">
            <Card.Header>About District Wise Crime Commited Against Women</Card.Header>
            {abt_dw_ws.map(abt_dw_w=>
            <Card.Body key={abt_dw_w.Abt_Dw_W_Id} className="mt-2">
                <Card.Text  className="obj-display">{abt_dw_w.Abt_Dw_W_Id}</Card.Text>
                <Card.Title>{abt_dw_w.Abt_Dw_W_Title}</Card.Title>
                <Card.Img variant="top"  className="AbtCrimeImg mt-2" src={process.env.REACT_APP_PHOTOPATH +abt_dw_w.Abt_Dw_W_Img} />
                <Card.Text className="mt-2"> {abt_dw_w.Abt_Dw_W_Des} </Card.Text>

                <ButtonToolbar>

               
                    <Button className="mr-2" variant="info"
                    onClick={() => this.setState({editModalShow:true,
                        abt_dw_w_id: abt_dw_w.Abt_Dw_W_Id,
                        abt_dw_w_title: abt_dw_w.Abt_Dw_W_Title,
                        abt_dw_w_img: abt_dw_w.Abt_Dw_W_Img,
                        abt_dw_w_des: abt_dw_w.Abt_Dw_W_Des
                })}>
                        Edit
                    </Button>



                    <Button className="mr-2" variant="danger"
                    onClick={() => this.deleteabt(abt_dw_w.Abt_DS_W_Id)}>
                        Delete
                    </Button>

                   
                    <EditDwWModal show={this.state.editModalShow}
                    onHide={editModalClose}
                    abt_dw_w_id={abt_dw_w_id}
                    abt_dw_w_title={abt_dw_w_title} 
                    abt_dw_w_img={abt_dw_w_img} 
                    abt_dw_w_des={abt_dw_w_des} 
                    />
                </ButtonToolbar>
            </Card.Body>
            )}
            </Card>
            

            <ButtonToolbar className="mt-4">
                <Button variant="primary"
                onClick={()=>this.setState({addModalShow:true})}>
                    Add About info
                </Button>


                <AddDwWModal show={this.state.addModalShow}
                onHide={addModalClose}/>
            </ButtonToolbar>
        </div>}
        </div>
        )
    }
}