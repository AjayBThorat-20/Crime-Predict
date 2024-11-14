import React,{Component} from 'react';
import {Card} from 'react-bootstrap';

import {Button,ButtonToolbar} from 'react-bootstrap';
import {AddDwSTModal} from '../Analysis_Content/Add_Analysis/AddDwSTModal';
import {EditDwSTModal} from '../Analysis_Content/Edit_Analysis/EditDwSTModal';
import {SimpleLoader} from '../../../../components/SimpleLoader';
import '../../../../Styles/Crimes/Crimepage/CrimePageData.css';
export class AnDwST extends Component{


    constructor(props){
        super(props);
        this.state = {an_dw_sts:[],addModalShow:false,editModalShow:false, loading:true}
// ,  editModalShow:false
    }n
    // refresh department list
    refreshList(){
        fetch(process.env.REACT_APP_API+'analysis-dw-st')
        .then(response =>response.json())
        .then(data =>{
            this.setState({an_dw_sts:data, loading:false});
        });
    }

    componentDidMount() {
        this.refreshList();
    }

    componentDidUpdate(){
        this.refreshList();
    }

    

    deletePost(an_dw_st_id) {
        if (window.confirm('Are you sure')){
            fetch(process.env.REACT_APP_API+'analysis-dw-st/'+ an_dw_st_id,{
                method: 'DELETE',
                header:{'Accept': 'application/json',
            'Content-Type': 'application/json'}
            })
        }
    }
    
    render(){

        // const {vposts}=this.state;

        const {an_dw_sts, an_dw_st_id, an_dw_st_title, an_dw_st_img, an_dw_st_des}=this.state;
        let addModalClose=()=>this.setState({addModalShow:false});
        let editModalClose=()=>this.setState({editModalShow:false});
        return(
            <div>

            {this.state.loading ? 
            
            <div className="justify-content-center"> <SimpleLoader/> </div> :  
             
            <div className="container mt-5" >
                                
            <Card className="text-center">
            <Card.Header>Analysis District Wise Crime Commited Against ST</Card.Header>
            {an_dw_sts.map(an_dw_st=>
            <Card.Body key={an_dw_st.An_Dw_ST_Id} className="mt-2">
                <Card.Text className="obj-display" >{an_dw_st.An_Dw_ST_Id}</Card.Text>
                <Card.Title>{an_dw_st.An_Dw_ST_Title}</Card.Title>
                <Card.Img variant="top"  className="AnCrimeImg mt-2" src={process.env.REACT_APP_PHOTOPATH +an_dw_st.An_Dw_ST_Img} />
                <Card.Text className="mt-3"> {an_dw_st.An_Dw_ST_Des} </Card.Text>

                <ButtonToolbar>

               
                    <Button className="mr-2" variant="info"
                    onClick={() => this.setState({editModalShow:true,
                        an_dw_st_id: an_dw_st.An_Dw_ST_Id,
                        an_dw_st_title: an_dw_st.An_Dw_ST_Title,
                        an_dw_st_img: an_dw_st.An_Dw_ST_Img,
                        an_dw_st_des: an_dw_st.An_Dw_ST_Des
                })}>
                        Edit
                    </Button>



                    <Button className="mr-2" variant="danger"
                    onClick={() => this.deletePost(an_dw_st.An_Dw_ST_Id)}>
                        Delete
                    </Button>

                   
                    <EditDwSTModal show={this.state.editModalShow}
                    onHide={editModalClose}
                    an_dw_st_id={an_dw_st_id}
                    an_dw_st_title={an_dw_st_title} 
                    an_dw_st_img={an_dw_st_img} 
                    an_dw_st_des={an_dw_st_des} 
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


                <AddDwSTModal show={this.state.addModalShow}
                onHide={addModalClose}/>
            </ButtonToolbar>
        </div>}
        </div>
        )
    }
}