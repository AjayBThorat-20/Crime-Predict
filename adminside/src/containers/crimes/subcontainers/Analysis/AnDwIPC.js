import React,{Component} from 'react';
import {Card} from 'react-bootstrap';

import {Button,ButtonToolbar} from 'react-bootstrap';
import {AddDwIPCModal} from '../Analysis_Content/Add_Analysis/AddDwIPCModal';
import {EditDwIPCModal} from '../Analysis_Content/Edit_Analysis/EditDwIPCModal';
import {SimpleLoader} from '../../../../components/SimpleLoader';
import '../../../../Styles/Crimes/Crimepage/CrimePageData.css';

export class AnDwIPC extends Component{


    constructor(props){
        super(props);
        this.state = {an_dw_ipcs:[],addModalShow:false,editModalShow:false, loading:true}
// ,  editModalShow:false
    }

    

    // refresh department list
    refreshList(){
        fetch(process.env.REACT_APP_API+'analysis-dw-ipc')
        .then(response =>response.json())
        .then(data =>{
            this.setState({an_dw_ipcs:data, loading: false});
        });
    }

    componentDidMount() {
        this.refreshList();
    }

    componentDidUpdate(){
        this.refreshList();
    }

    

    deletePost(an_dw_ipc_id) {
        if (window.confirm('Are you sure')){
            fetch(process.env.REACT_APP_API+'analysis-dw-ipc/'+ an_dw_ipc_id,{
                method: 'DELETE',
                header:{'Accept': 'application/json',
            'Content-Type': 'application/json'}
            })
        }
    }
    
    render(){

        // const {vposts}=this.state;

        const {an_dw_ipcs, an_dw_ipc_id, an_dw_ipc_title, an_dw_ipc_img, an_dw_ipc_des}=this.state;
        let addModalClose=()=>this.setState({addModalShow:false});
        let editModalClose=()=>this.setState({editModalShow:false});
        return(

            <div>

            {this.state.loading ? 
            
            <div className="justify-content-center"> <SimpleLoader/> </div> :  
             
            <div className="container mt-5" >
                                
            <Card className="text-center">
            <Card.Header>Analysis District Wise Crime Commited Against IPC</Card.Header>
            {an_dw_ipcs.map(an_dw_ipc=>
            <Card.Body key={an_dw_ipc.An_Dw_IPC_Id} className="mt-2">
                <Card.Text  className="obj-display" >{an_dw_ipc.An_Dw_IPC_Id}</Card.Text>
                <Card.Title>{an_dw_ipc.An_Dw_IPC_Title}</Card.Title>
                <Card.Img variant="top" className="AnCrimeImg mt-2" src={process.env.REACT_APP_PHOTOPATH +an_dw_ipc.An_Dw_IPC_Img} />
                <Card.Text className="mt-3"> {an_dw_ipc.An_Dw_IPC_Des} </Card.Text>

                <ButtonToolbar>

                {/* const {about_dw_ipcs, about_dw_ipc_id, about_dw_ipc_title, about_dw_ipc_img, about_dw_ipc_des}=this.state; */}
                <Button className="mr-2" variant="info"
                    onClick={() => this.setState({editModalShow:true,
                        an_dw_ipc_id: an_dw_ipc.An_Dw_IPC_Id,
                        an_dw_ipc_title: an_dw_ipc.An_Dw_IPC_Title,
                        an_dw_ipc_img: an_dw_ipc.An_Dw_IPC_Img,
                        an_dw_ipc_des: an_dw_ipc.An_Dw_IPC_Des
                })}>
                        Edit
                    </Button>



                    <Button className="mr-2" variant="danger"
                    onClick={() => this.deletePost(an_dw_ipc.An_Dw_IPC_Id)}>
                        Delete
                    </Button>

                    {/* const {about_dw_ipcs, about_dw_ipc_id, about_dw_ipc_title, about_dw_ipc_img, about_dw_ipc_des}=this.state; */}
                    <EditDwIPCModal show={this.state.editModalShow}
                    onHide={editModalClose}
                    an_dw_ipc_id={an_dw_ipc_id}
                    an_dw_ipc_title={an_dw_ipc_title} 
                    an_dw_ipc_img={an_dw_ipc_img} 
                    an_dw_ipc_des={an_dw_ipc_des} 
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


                <AddDwIPCModal show={this.state.addModalShow}
                onHide={addModalClose}/>
            </ButtonToolbar>
        </div>}
        </div>
        )
    }
}