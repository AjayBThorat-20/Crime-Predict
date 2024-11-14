import React,{Component} from 'react';
import {Card} from 'react-bootstrap';

import {Button,ButtonToolbar} from 'react-bootstrap';
import {AddDwChildModal} from '../About_Content/Add_About/AddDwChildModal';
import {EditDwChildModal} from '../About_Content/Edit_About/EditDwChildModal';
import {SimpleLoader} from '../../../../components/SimpleLoader';
import '../../../../Styles/Crimes/Crimepage/CrimePageData.css';
export class AbtDwChild extends Component{


    constructor(props){
        super(props);
        this.state = {abt_dw_childs:[],addModalShow:false,editModalShow:false , loading: true}
// ,  editModalShow:false
    }

    

    // refresh department list
    refreshList(){
        fetch(process.env.REACT_APP_API+'about-dw-childs')
        .then(response =>response.json())
        .then(data =>{
            this.setState({abt_dw_childs:data,  loading: false});
        });
    }

    componentDidMount() {
        this.refreshList();
    }

    componentDidUpdate(){
        this.refreshList();
    }

    

    deleteabt(abt_dw_child_id) {
        if (window.confirm('Are you sure')){
            fetch(process.env.REACT_APP_API+'about-dw-childs/'+abt_dw_child_id,{
                method: 'DELETE',
                header:{'Accept': 'application/json',
            'Content-Type': 'application/json'}
            })
        }
    }
    render(){

        // const {vposts}=this.state;

        const {abt_dw_childs, abt_dw_child_id, abt_dw_child_title, abt_dw_child_img, abt_dw_child_des}=this.state;
        let addModalClose=()=>this.setState({addModalShow:false});
        let editModalClose=()=>this.setState({editModalShow:false});
        return(


            <div>

            {this.state.loading ? 
            
            <div className="justify-content-center"> <SimpleLoader/> </div> :  
             
            <div className="container mt-5" >
                   
            <Card className="text-center">
            <Card.Header>About District Wise Crime Commited Against Childrens</Card.Header>
            {abt_dw_childs.map(abt_dw_child=>                 
            
            <Card.Body  key={abt_dw_child.Abt_Dw_Child_Id} className="mt-2">
                <Card.Text className="obj-display" >{abt_dw_child.Abt_Dw_Child_Id}</Card.Text>
                <Card.Title>{abt_dw_child.Abt_Dw_Child_Title}</Card.Title>
                <Card.Img variant="top" className="AbtCrimeImg mt-2" src={process.env.REACT_APP_PHOTOPATH+abt_dw_child.Abt_Dw_Child_Img} ></Card.Img>
                <Card.Text className="mt-3"> {abt_dw_child.Abt_Dw_Child_Des} </Card.Text>

                <ButtonToolbar>

                {/* const {about_dw_childs, about_dw_child_id, about_dw_child_title, about_dw_child_img, about_dw_child_des}=this.state; */}
                    <Button className="mr-2" variant="info"
                    onClick={() => this.setState({editModalShow:true,
                        abt_dw_child_id: abt_dw_child.Abt_Dw_Child_Id,
                        abt_dw_child_title: abt_dw_child.Abt_Dw_Child_Title,
                        abt_dw_child_img: abt_dw_child.Abt_Dw_Child_Img,
                        abt_dw_child_des: abt_dw_child.Abt_Dw_Child_Des
                })}>
                        Edit
                    </Button>



                    <Button className="mr-2" variant="danger"
                    onClick={() => this.deleteabt(abt_dw_child.Abt_Dw_Child_Id)}>
                        Delete
                    </Button>

                    {/* const {about_dw_childs, about_dw_child_id, about_dw_child_title, about_dw_child_img, about_dw_child_des}=this.state; */}
                    <EditDwChildModal show={this.state.editModalShow}
                    onHide={editModalClose}
                    abt_dw_child_id={abt_dw_child_id}
                    abt_dw_child_title={abt_dw_child_title} 
                    abt_dw_child_img={abt_dw_child_img} 
                    abt_dw_child_des={abt_dw_child_des} 
                    />
                </ButtonToolbar>
            </Card.Body>)}
            
            </Card>
            

            <ButtonToolbar className="mt-4">
                <Button variant="primary"
                onClick={()=>this.setState({addModalShow:true})}>
                    Add About info
                </Button>


                <AddDwChildModal show={this.state.addModalShow}
                onHide={addModalClose}/>
            </ButtonToolbar>
        </div>}
        </div>
        )
    }
}