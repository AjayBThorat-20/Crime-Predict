import React,{Component} from 'react';
import {Card} from 'react-bootstrap';

import {Button,ButtonToolbar} from 'react-bootstrap';
import {AddPKIDModal} from '../About_Content/Add_About/AddPKIDModal';
import {EditPKIDModal} from '../About_Content/Edit_About/EditPKIDModal';
import {SimpleLoader} from '../../../../components/SimpleLoader';
import '../../../../Styles/Crimes/Crimepage/CrimePageData.css';
export class AbtPKID extends Component{


    constructor(props){
        super(props);
        this.state = {abt_pkids:[],addModalShow:false,editModalShow:false, loading:true}
// ,  editModalShow:false
    }

    

    // refresh department list
    refreshList(){
        fetch(process.env.REACT_APP_API+'about-pkid')
        .then(response =>response.json())
        .then(data =>{
            this.setState({abt_pkids:data, loading: false});
        });
    }

    componentDidMount() {
        this.refreshList();
    }

    componentDidUpdate(){
        this.refreshList();
    }

    

    deleteabt(abt_pkid_id) {
        if (window.confirm('Are you sure')){
            fetch(process.env.REACT_APP_API+'about-pkid/'+ abt_pkid_id,{
                method: 'DELETE',
                header:{'Accept': 'application/json',
            'Content-Type': 'application/json'}
            })
        }
    }
    
    render(){

        // const {vposts}=this.state;

        const {abt_pkids, abt_pkid_id, abt_pkid_title, abt_pkid_img, abt_pkid_des}=this.state;
        let addModalClose=()=>this.setState({addModalShow:false});
        let editModalClose=()=>this.setState({editModalShow:false});
        return(
            <div>

            {this.state.loading ? 
            
            <div className="justify-content-center"> <SimpleLoader/> </div> :  
             
            <div className="container mt-5" >
                                
            <Card className="text-center">
            <Card.Header>About Police killed or injured on duty</Card.Header>
            {abt_pkids.map(abt_pkid=>
            <Card.Body key={abt_pkid.Abt_PKID_Id} className="mt-2">
                <Card.Text className="obj-display">{abt_pkid.Abt_PKID_Id}</Card.Text>
                <Card.Title>{abt_pkid.Abt_PKID_Title}</Card.Title>
                <Card.Img variant="top" className="AbtCrimeImg mt-2" src={process.env.REACT_APP_PHOTOPATH +abt_pkid.Abt_PKID_Img} />
                <Card.Text className="mt-3"> {abt_pkid.Abt_PKID_Des} </Card.Text>

                <ButtonToolbar>

               
                    <Button className="mr-2" variant="info"
                    onClick={() => this.setState({editModalShow:true,
                        abt_pkid_id: abt_pkid.Abt_PKID_Id,
                        abt_pkid_title: abt_pkid.Abt_PKID_Title,
                        abt_pkid_img: abt_pkid.Abt_PKID_Img,
                        abt_pkid_des: abt_pkid.Abt_PKID_Des
                })}>
                        Edit
                    </Button>



                    <Button className="mr-2" variant="danger"
                    onClick={() => this.deleteabt(abt_pkid.Abt_PKID_Id)}>
                        Delete
                    </Button>

                   
                    <EditPKIDModal show={this.state.editModalShow}
                    onHide={editModalClose}
                    abt_pkid_id={abt_pkid_id}
                    abt_pkid_title={abt_pkid_title} 
                    abt_pkid_img={abt_pkid_img} 
                    abt_pkid_des={abt_pkid_des} 
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


                <AddPKIDModal show={this.state.addModalShow}
                onHide={addModalClose}/>
            </ButtonToolbar>
        </div>}
        </div>
        )
    }
}