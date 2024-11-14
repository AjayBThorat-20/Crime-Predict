import React,{Component} from 'react';
import {Card} from 'react-bootstrap';

import {Button,ButtonToolbar} from 'react-bootstrap';
import {AddDwChildModal} from '../Analysis_Content/Add_Analysis/AddDwChildModal';
import {EditDwChildModal} from '../Analysis_Content/Edit_Analysis/EditDwChildModal';
import {SimpleLoader} from '../../../../components/SimpleLoader';
import '../../../../Styles/Crimes/Crimepage/CrimePageData.css';
export class AnDwChild extends Component{


    constructor(props){
        super(props);
        this.state = {an_dw_childs:[],addModalShow:false,editModalShow:false, loading: true}
// ,  editModalShow:false
    }

    

    // refresh department list
    refreshList(){
        fetch(process.env.REACT_APP_API+'analysis-dw-childs')
        .then(response =>response.json())
        .then(data =>{
            this.setState({an_dw_childs:data, loading: false});
        });
    }

    componentDidMount() {
        this.refreshList();
    }

    componentDidUpdate(){
        this.refreshList();
    }

    

    deletePost(an_dw_child_id) {
        if (window.confirm('Are you sure')){
            fetch(process.env.REACT_APP_API+'analysis-dw-childs/'+ an_dw_child_id,{
                method: 'DELETE',
                header:{'Accept': 'application/json',
            'Content-Type': 'application/json'}
            })
        }
    }
    
    render(){

        // const {vposts}=this.state;

        const {an_dw_childs, an_dw_child_id, an_dw_child_title, an_dw_child_img, an_dw_child_des}=this.state;
        let addModalClose=()=>this.setState({addModalShow:false});
        let editModalClose=()=>this.setState({editModalShow:false});
        return(
            <div>

            {this.state.loading ? 
            
            <div className="justify-content-center"> <SimpleLoader/> </div> :  
             
            <div className="container mt-5" >
                                
            <Card className="text-center">
            <Card.Header>Analysis District Wise Crime Commited Against Childrens</Card.Header>
            {an_dw_childs.map(an_dw_child=>
            <Card.Body key={an_dw_child.An_Dw_Child_Id} className="mt-2"> 
                <Card.Text  className="obj-display" >{an_dw_child.An_Dw_Child_Id}</Card.Text>
                <Card.Title>{an_dw_child.An_Dw_Child_Title}</Card.Title>
                <Card.Img variant="top" className="AnCrimeImg mt-2" src={process.env.REACT_APP_PHOTOPATH +an_dw_child.An_Dw_Child_Img} />
                <Card.Text className="mt-3"> {an_dw_child.An_Dw_Child_Des} </Card.Text>

                <ButtonToolbar>

                {/* const {about_dw_childs, about_dw_child_id, about_dw_child_title, about_dw_child_img, about_dw_child_des}=this.state; */}
                    <Button className="mr-2" variant="info"
                    onClick={() => this.setState({editModalShow:true,
                        an_dw_child_id: an_dw_child.An_Dw_Child_Id,
                        an_dw_child_title: an_dw_child.An_Dw_Child_Title,
                        an_dw_child_img: an_dw_child.An_Dw_Child_Img,
                        an_dw_child_des: an_dw_child.An_Dw_Child_Des
                })}>
                        Edit
                    </Button>



                    <Button className="mr-2" variant="danger"
                    onClick={() => this.deletePost(an_dw_child.An_Dw_Child_Id)}>
                        Delete
                    </Button>

                    {/* const {about_dw_childs, about_dw_child_id, about_dw_child_title, about_dw_child_img, about_dw_child_des}=this.state; */}
                    <EditDwChildModal show={this.state.editModalShow}
                    onHide={editModalClose}
                    an_dw_child_id={an_dw_child_id}
                    an_dw_child_title={an_dw_child_title} 
                    an_dw_child_img={an_dw_child_img} 
                    an_dw_child_des={an_dw_child_des} 
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


                <AddDwChildModal show={this.state.addModalShow}
                onHide={addModalClose}/>
            </ButtonToolbar>
        </div>}
        </div>
        )
    }
}