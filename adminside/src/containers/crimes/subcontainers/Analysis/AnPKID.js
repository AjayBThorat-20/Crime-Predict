import React,{Component} from 'react';
import {Card} from 'react-bootstrap';

import {Button,ButtonToolbar} from 'react-bootstrap';
import {AddPKIDModal} from '../Analysis_Content/Add_Analysis/AddPKIDModal';
import {EditPKIDModal} from '../Analysis_Content/Edit_Analysis/EditPKIDModal';
import {SimpleLoader} from '../../../../components/SimpleLoader';
import '../../../../Styles/Crimes/Crimepage/CrimePageData.css';
export class AnPKID extends Component{


    constructor(props){
        super(props);
        this.state = {an_pkids:[],addModalShow:false,editModalShow:false, loading: true}
// ,  editModalShow:false
    }

    

    // refresh department list
    refreshList(){
        fetch(process.env.REACT_APP_API+'analysis-pkid')
        .then(response =>response.json())
        .then(data =>{
            this.setState({an_pkids:data, loading: false});
        });
    }

    componentDidMount() {
        this.refreshList();
    }

    componentDidUpdate(){
        this.refreshList();
    }

    

    deletePost(an_pkid_id) {
        if (window.confirm('Are you sure')){
            fetch(process.env.REACT_APP_API+'analysis-pkid/'+ an_pkid_id,{
                method: 'DELETE',
                header:{'Accept': 'application/json',
            'Content-Type': 'application/json'}
            })
        }
    }
    
    render(){

        // const {vposts}=this.state;

        const {an_pkids, an_pkid_id, an_pkid_title, an_pkid_img, an_pkid_des}=this.state;
        let addModalClose=()=>this.setState({addModalShow:false});
        let editModalClose=()=>this.setState({editModalShow:false});
        return(
            <div>

            {this.state.loading ? 
            
            <div className="justify-content-center"> <SimpleLoader/> </div> :  
             
            <div className="container mt-5" >
                                
            <Card className="text-center">
            <Card.Header className="crime-card-header">Analysis Police killed or injured on duty</Card.Header>
            {an_pkids.map(an_pkid=>
            <Card.Body key={an_pkid.An_PKID_Id} className="mt-2">
                <Card.Text className="obj-display">{an_pkid.An_PKID_Id}</Card.Text>
                <Card.Title>{an_pkid.An_PKID_Title}</Card.Title>
                <Card.Img variant="top" className="AnCrimeImg mt-2" src={process.env.REACT_APP_PHOTOPATH +an_pkid.An_PKID_Img} />
                <Card.Text className="mt-3"> {an_pkid.An_PKID_Des} </Card.Text>

                <ButtonToolbar>

               
                    <Button className="mr-2" variant="info"
                    onClick={() => this.setState({editModalShow:true,
                        an_pkid_id: an_pkid.An_PKID_Id,
                        an_pkid_title: an_pkid.An_PKID_Title,
                        an_pkid_img: an_pkid.An_PKID_Img,
                        an_pkid_des: an_pkid.An_PKID_Des
                })}>
                        Edit
                    </Button>



                    <Button className="mr-2" variant="danger"
                    onClick={() => this.deletePost(an_pkid.An_PKID_Id)}>
                        Delete
                    </Button>

                   
                    <EditPKIDModal show={this.state.editModalShow}
                    onHide={editModalClose}
                    an_pkid_id={an_pkid_id}
                    an_pkid_title={an_pkid_title} 
                    an_pkid_img={an_pkid_img} 
                    an_pkid_des={an_pkid_des} 
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


                <AddPKIDModal show={this.state.addModalShow}
                onHide={addModalClose}/>
            </ButtonToolbar>
        </div>}
        </div>
        )
    }
}