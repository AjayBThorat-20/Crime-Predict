import React, { Component } from 'react';
import { Button, Row, Col, Form, Image } from 'react-bootstrap';

import "../../Styles/containers/subcontainer/title.css"

class AddPost extends Component{


    constructor(props) {
        super(props);
        this.state = { crims: [], imagesrc: process.env.REACT_APP_PHOTOPATH + this.photofilename  };
        this.handleSubmit = this.handleSubmit.bind(this);
        console.log(this.handleSubmit);
        this.handleFileSelected = this.handleFileSelected.bind(this);
        console.log(this.handleFileSelected);
    }

    photofilename = "upload_icon.jpg";
    imagesrc = process.env.REACT_APP_PHOTOPATH + this.photofilename;
    


    // componentDidMount() {
    //     fetch(process.env.REACT_APP_API + 'crimes')
    //         .then(response => response.json())
    //         .then(data => {
    //             this.setState({ crims: data });
    //         });
    // }


    refreshList() {
        fetch(process.env.REACT_APP_API + 'crimes')
            .then(response => response.json())
            .then(data => {
                this.setState({ crims: data });
            });
    }

    componentDidMount() {
        this.refreshList();
    }

    componentDidUpdate() {
        this.refreshList();
    }


    handleSubmit(event) {
        event.preventDefault();
        this.refreshPage();
        fetch(process.env.REACT_APP_API + 'posts', {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                PostsId: null,
                PostsTitle: event.target.PostsTitle.value,
                PostsDescription: event.target.PostsDescription.value,
                Crime: event.target.Crime.value,
                CrimeDate: event.target.CrimeDate.value,
                PhotoFileName: this.photofilename
            }),
        })

            .then(res => res.json())
            .then((result) => {
                alert(result);
                // console.log('Success:', result);
            },
                (error) => {
                    alert("Failed");
                    // console.log('error:', error);
                })
    }





    handleFileSelected(event) {
        event.preventDefault();
        this.photofilename = event.target.files[0].name;
        // console.log(this.photofilename);
        const formData = new FormData();
        // console.log(formData);
        formData.append(
            "myFile",
            event.target.files[0],
            event.target.files[0].name

        );
        fetch(process.env.REACT_APP_API + 'Posts/SaveFile', {
            method: 'POST',
            body: formData
        })
            .then(res => res.json())
            .then((result) => {
                this.imagesrc = process.env.REACT_APP_PHOTOPATH + result;
                this.setState({ imagesrc: process.env.REACT_APP_PHOTOPATH + result})
            
                console.log(result);
                console.log(this.imagesrc);
            },
                (error) => {
                    alert('Failed');
                })

    }
    refreshPage(){
        window.location.reload();
    } 

    render() {
       
     
        return (

            <div className="container justify-contained-center"  >
                <div className="mt-5 d-flex justify-content-center">
                    <div className="container mt-2" >
                <h2 className="txt-center" >Add New Crime </h2>
                </div>
                </div>
                <div className="justify-contained-center mt-4">
                    <Row >


                        <Col sm={6}>

                            <Row className="mt-5 justify-content-center">
                                <Image width="50%" height="50%" src={this.state.imagesrc} />
                            </Row>
                            <Row className="mt-5 justify-content-center">
                                <input onChange={this.handleFileSelected} type="File" />
                            </Row>





                        </Col>
                        <Col sm={6}>
                            <Form onSubmit={this.handleSubmit} >
                                <Form.Group controlId="PostsTitle">
                                    <Form.Label>Post Title</Form.Label>
                                    <Form.Control type="text" name="PostsTitle" required
                                        placeholder="Enter Post Title" />
                                </Form.Group>


                                <Form.Group controlId="PostsDescription">
                                    <Form.Label>Post Description</Form.Label>
                                    <Form.Control as="textarea" rows={6} name="PostsDescription" required
                                        placeholder="Enter Post Description" />
                                </Form.Group>


                                <Form.Group controlId="Crime">
                                    <Form.Label>Crime</Form.Label>
                                    <Form.Control as="select">

                                        {this.state.crims.map(crim =>
                                            <option key={crim.CrimesId}>{crim.CrimesName}</option>
                                        )}
                                    </Form.Control>
                                </Form.Group>


                                <Form.Group controlId="CrimeDate">
                                    <Form.Label>CrimeDate</Form.Label>
                                    <Form.Control
                                        type="date"
                                        name="CrimeDate"
                                        required
                                        placehilder="Please select crime date" />
                                </Form.Group>




                                <Form.Group >
                                    <Button variant="primary" type="submit">
                                        Add Crime
                                    </Button>
                                </Form.Group>
                            </Form>
                        </Col>


                    </Row>
                </div>




            </div>
        )
    }
}

export default AddPost;
