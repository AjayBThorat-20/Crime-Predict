import React,{Component} from 'react';
import {Card} from 'react-bootstrap';

import {Button,ButtonToolbar} from 'react-bootstrap';
import {AddDwIPCModal} from '../About_Content/Add_About/AddDwIPCModal';
import {EditDwIPCModal} from '../About_Content/Edit_About/EditDwIPCModal';
import {SimpleLoader} from '../../../../components/SimpleLoader';
import '../../../../Styles/Crimes/Crimepage/CrimePageData.css';
export class AbtDwIPC extends Component{


    constructor(props){
        super(props);
        this.state = {abt_dw_ipcs:[],addModalShow:false,editModalShow:false, loading:true};
// ,  editModalShow:false
    }

    

    // refresh department list
    refreshList(){
        fetch(process.env.REACT_APP_API+'about-dw-ipc')
        .then(response =>response.json())
        .then(data =>{
            this.setState({abt_dw_ipcs:data, loading:false});
        });
    }

    componentDidMount() {
        this.refreshList();
    }

    componentDidUpdate(){
        this.refreshList();
    }

    

    deleteabt(abt_dw_ipc_id) {
        if (window.confirm('Are you sure')){
            fetch(process.env.REACT_APP_API+'about-dw-ipc/'+ abt_dw_ipc_id,{
                method: 'DELETE',
                header:{'Accept': 'application/json',
            'Content-Type': 'application/json'}
            })
        }
    }
    
    render(){

        // const {vposts}=this.state;

        const {abt_dw_ipcs, abt_dw_ipc_id, abt_dw_ipc_title, abt_dw_ipc_img, abt_dw_ipc_des}=this.state;
        let addModalClose=()=>this.setState({addModalShow:false});
        let editModalClose=()=>this.setState({editModalShow:false});
        return(
            <div>

            {this.state.loading ? 
            
            <div className="justify-content-center"> <SimpleLoader/> </div> :  
             
            <div className="container mt-5" >
                                
            <Card className="text-center">
            <Card.Header>About District Wise Crime Commited Against IPC</Card.Header>
            {abt_dw_ipcs.map(abt_dw_ipc=>
            <Card.Body key={abt_dw_ipc.Abt_Dw_IPC_Id} className="mt-2">
                <Card.Text className="obj-display">{abt_dw_ipc.Abt_Dw_IPC_Id}</Card.Text>
                <Card.Title>{abt_dw_ipc.Abt_Dw_IPC_Title}</Card.Title>
                <Card.Img variant="top" className="AbtCrimeImg mt-2" src={process.env.REACT_APP_PHOTOPATH +abt_dw_ipc.Abt_Dw_IPC_Img} />
                <Card.Text className="mt-3"> {abt_dw_ipc.Abt_Dw_IPC_Des} </Card.Text>

                <ButtonToolbar>

                {/* const {about_dw_ipcs, about_dw_ipc_id, about_dw_ipc_title, about_dw_ipc_img, about_dw_ipc_des}=this.state; */}
                <Button className="mr-2" variant="info"
                    onClick={() => this.setState({editModalShow:true,
                        abt_dw_ipc_id: abt_dw_ipc.Abt_Dw_IPC_Id,
                        abt_dw_ipc_title: abt_dw_ipc.Abt_Dw_IPC_Title,
                        abt_dw_ipc_img: abt_dw_ipc.Abt_Dw_IPC_Img,
                        abt_dw_ipc_des: abt_dw_ipc.Abt_Dw_IPC_Des
                })}>
                        Edit
                    </Button>



                    <Button className="mr-2" variant="danger"
                    onClick={() => this.deleteabt(abt_dw_ipc.Abt_Dw_IPC_Id)}>
                        Delete
                    </Button>

                    {/* const {about_dw_ipcs, about_dw_ipc_id, about_dw_ipc_title, about_dw_ipc_img, about_dw_ipc_des}=this.state; */}
                    <EditDwIPCModal show={this.state.editModalShow}
                    onHide={editModalClose}
                    abt_dw_ipc_id={abt_dw_ipc_id}
                    abt_dw_ipc_title={abt_dw_ipc_title} 
                    abt_dw_ipc_img={abt_dw_ipc_img} 
                    abt_dw_ipc_des={abt_dw_ipc_des} 
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


                <AddDwIPCModal show={this.state.addModalShow}
                onHide={addModalClose}/>
            </ButtonToolbar>
        </div>}
        </div>
        )
    }
}