import React,{Component} from 'react';
import {Card} from 'react-bootstrap';

import {Button,ButtonToolbar} from 'react-bootstrap';
import {AddDwSTModal} from '../About_Content/Add_About/AddDwSTModal';
import {EditDwSTModal} from '../About_Content/Edit_About/EditDwSTModal';
import {SimpleLoader} from '../../../../components/SimpleLoader';
import '../../../../Styles/Crimes/Crimepage/CrimePageData.css';
export class AbtDwST extends Component{


    constructor(props){
        super(props);
        this.state = {abt_dw_sts:[],addModalShow:false,editModalShow:false, loading: true}
// ,  editModalShow:fal
    }

    

    // refresh department list
    refreshList(){
        fetch(process.env.REACT_APP_API+'about-dw-st')
        .then(response =>response.json())
        .then(data =>{
            this.setState({abt_dw_sts:data, loading:false});
        });
    }

    componentDidMount() {
        this.refreshList();
    }

    componentDidUpdate(){
        this.refreshList();
    }

    

    deleteabt(abt_dw_st_id) {
        if (window.confirm('Are you sure')){
            fetch(process.env.REACT_APP_API+'about-dw-st/'+ abt_dw_st_id,{
                method: 'DELETE',
                header:{'Accept': 'application/json',
            'Content-Type': 'application/jstn'}
            })
        }
    }
    
    render(){

        // const {vposts}=this.state;

        const {abt_dw_sts, abt_dw_st_id, abt_dw_st_title, abt_dw_st_img, abt_dw_st_des}=this.state;
        let addModalClose=()=>this.setState({addModalShow:false});
        let editModalClose=()=>this.setState({editModalShow:false});
        return(
            <div>

            {this.state.loading ? 
            
            <div className="justify-content-center"> <SimpleLoader/> </div> :  
             
            <div className="container mt-5" >
                                
            <Card className="text-center">
            <Card.Header>About District Wise Crime Commited Against ST</Card.Header>
            {abt_dw_sts.map(abt_dw_st=>
            <Card.Body key={abt_dw_st.Abt_Dw_ST_Id} className="mt-2">
                <Card.Text className="obj-display" >{abt_dw_st.Abt_Dw_ST_Id}</Card.Text>
                <Card.Title>{abt_dw_st.Abt_Dw_ST_Title}</Card.Title>
                <Card.Img variant="top"   className="AbtCrimeImg mt-2" src={process.env.REACT_APP_PHOTOPATH +abt_dw_st.Abt_Dw_ST_Img} />
                <Card.Text className="mt-3"> {abt_dw_st.Abt_Dw_ST_Des} </Card.Text>
                
                <ButtonToolbar>

               
                    <Button className="mr-2" variant="info"
                    onClick={() => this.setState({editModalShow:true,
                        abt_dw_st_id: abt_dw_st.Abt_Dw_ST_Id,
                        abt_dw_st_title: abt_dw_st.Abt_Dw_ST_Title,
                        abt_dw_st_img: abt_dw_st.Abt_Dw_ST_Img,
                        abt_dw_st_des: abt_dw_st.Abt_Dw_ST_Des
                })}>
                        Edit
                    </Button>



                    <Button className="mr-2" variant="danger"
                    onClick={() => this.deleteabt(abt_dw_st.Abt_Dw_ST_Id)}>
                        Delete
                    </Button>

                   
                    <EditDwSTModal show={this.state.editModalShow}
                    onHide={editModalClose}
                    abt_dw_st_id={abt_dw_st_id}
                    abt_dw_st_title={abt_dw_st_title} 
                    abt_dw_st_img={abt_dw_st_img} 
                    abt_dw_st_des={abt_dw_st_des} 
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


                <AddDwSTModal show={this.state.addModalShow}
                onHide={addModalClose}/>
            </ButtonToolbar>
        </div>}
        </div>
        )
    }
}