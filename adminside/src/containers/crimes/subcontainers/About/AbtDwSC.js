import React,{Component} from 'react';
import {Card} from 'react-bootstrap';

import {Button,ButtonToolbar} from 'react-bootstrap';
import {AddDwSCModal} from '../About_Content/Add_About/AddDwSCModal';
import {EditDwSCModal} from '../About_Content/Edit_About/EditDwSCModal';
import {SimpleLoader} from '../../../../components/SimpleLoader';
import '../../../../Styles/Crimes/Crimepage/CrimePageData.css';
export class AbtDwSC extends Component{


    constructor(props){
        super(props);
        this.state = {abt_dw_scs:[],addModalShow:false,editModalShow:false, loading:true}
// ,  editModalShow:false
    }

    

    // refresh department list
    refreshList(){
        fetch(process.env.REACT_APP_API+'about-dw-sc')
        .then(response =>response.json())
        .then(data =>{
            this.setState({abt_dw_scs:data, loading:false});
        });
    }

    componentDidMount() {
        this.refreshList();
    }

    componentDidUpdate(){
        this.refreshList();
    }

    

    deleteabt(abt_dw_sc_id) {
        if (window.confirm('Are you sure')){
            fetch(process.env.REACT_APP_API+'about-dw-sc/'+ abt_dw_sc_id,{
                method: 'DELETE',
                header:{'Accept': 'application/json',
            'Content-Type': 'application/json'}
            })
        }
    }
    
    render(){

        // const {vposts}=this.state;

        const {abt_dw_scs, abt_dw_sc_id, abt_dw_sc_title, abt_dw_sc_img, abt_dw_sc_des}=this.state;
        let addModalClose=()=>this.setState({addModalShow:false});
        let editModalClose=()=>this.setState({editModalShow:false});
        return(
            <div>

            {this.state.loading ? 
            
            <div className="justify-content-center"> <SimpleLoader/> </div> :  
             
            <div className="container mt-5" >
                                
            <Card className="text-center">
            <Card.Header>About District Wise Crime Commited Against SC</Card.Header>
            {abt_dw_scs.map(abt_dw_sc=>
            <Card.Body key={abt_dw_sc.Abt_Dw_SC_Id} className="mt-2">
                <Card.Text className="obj-display">{abt_dw_sc.Abt_Dw_SC_Id}</Card.Text>
                <Card.Title>{abt_dw_sc.Abt_Dw_SC_Title}</Card.Title>
                <Card.Img variant="top"  className="AbtCrimeImg mt-2" src={process.env.REACT_APP_PHOTOPATH +abt_dw_sc.Abt_Dw_SC_Img} />
                <Card.Text className="mt-3"> {abt_dw_sc.Abt_Dw_SC_Des} </Card.Text>

                <ButtonToolbar>

               
                    <Button className="mr-2" variant="info"
                    onClick={() => this.setState({editModalShow:true,
                        abt_dw_sc_id: abt_dw_sc.Abt_Dw_SC_Id,
                        abt_dw_sc_title: abt_dw_sc.Abt_Dw_SC_Title,
                        abt_dw_sc_img: abt_dw_sc.Abt_Dw_SC_Img,
                        abt_dw_sc_des: abt_dw_sc.Abt_Dw_SC_Des
                })}>
                        Edit
                    </Button>



                    <Button className="mr-2" variant="danger"
                    onClick={() => this.deleteabt(abt_dw_sc.Abt_Dw_SC_Id)}>
                        Delete
                    </Button>

                   
                    <EditDwSCModal show={this.state.editModalShow}
                    onHide={editModalClose}
                    abt_dw_sc_id={abt_dw_sc_id}
                    abt_dw_sc_title={abt_dw_sc_title} 
                    abt_dw_sc_img={abt_dw_sc_img} 
                    abt_dw_sc_des={abt_dw_sc_des} 
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


                <AddDwSCModal show={this.state.addModalShow}
                onHide={addModalClose}/>
            </ButtonToolbar>
        </div>}
        </div>
        )
    }
}