import React, { Component } from 'react';
import { Card, Button, ButtonToolbar } from 'react-bootstrap';
import { ReadPostModal } from '../childcontainers/ReadPostModal';

import "../../Styles/containers/subcontainer/allposts.css";
import "../../Styles/containers/subcontainer/title.css";

class AllPosts extends Component {


    constructor(props) {
        super(props);
        this.state = { vposts: [], readModalShow: false }
    }

    refreshList() {
        fetch(process.env.REACT_APP_API + 'posts')
            .then(response => response.json())
            .then(data => {
                this.setState({ vposts: data });
            });
    }

    componentDidMount() {
        this.refreshList();
    }

    componentDidUpdate() {
        this.refreshList();
    }


    deletePost(postid) {
        if (window.confirm('Are you sure')) {
            fetch(process.env.REACT_APP_API + 'posts/' + postid, {
                method: 'DELETE',
                header: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                }
            })
        }
    }
    render() {

        const { vposts, postid, posttitle, postdes, crime, crimedate, photofilename } = this.state;
        let readModalClose = () => this.setState({ readModalShow: false });

        return (





            <div className='container'>

                <div className="mt-5 d-flex justify-content-center">
                    <div className="container mt-2" >
                        <h2 className="txt-center" >Recent Post</h2>
                    </div>
                </div>


                <div className=' mt-3 '>
                    {vposts.map(post =>
                        <div className="item-content">
                            <div key={post.PostsId} style={{ textAlign: 'center' }}>
                                <Card className="text-center-post"  >
                                    <Card.Img src={process.env.REACT_APP_PHOTOPATH + post.PhotoFileName} className="img-item" />
                                    <Card.Body className="item-pd" >
                                        <Card.Title className="item-pd" ><b>Title :</b>{post.PostsTitle}</Card.Title>
                                        <Card.Text className="item-pd" ><b>Type : </b>{post.Crime} </Card.Text>
                                        <Card.Text className="item-pd" ><b>Descripton :</b> <p className="crime-des">{post.PostsDescription} </p></Card.Text>

                                        <div className="float-left ml-3 mr-3">

                                            <Card.Text className="item-pd" ><b>Date :</b>  {post.CrimeDate}</Card.Text>


                                            <ButtonToolbar >
                                                <Button className="read-btn mr-2" variant="info"
                                                    onClick={() => this.setState({
                                                        readModalShow: true, postid: post.PostsId,
                                                        posttitle: post.PostsTitle,
                                                        postdes: post.PostsDescription,
                                                        crime: post.Crime,
                                                        crimedate: post.CrimeDate,
                                                        photofilename: post.PhotoFileName
                                                    })}>
                                                    Read
                                                </Button>



                                                {/* <Button className="mr-2" variant="danger"
                                        onClick={() => this.deletePost(post.PostsId)}>
                                            Delete
                                        </Button> */}

                                                <ReadPostModal show={this.state.readModalShow}
                                                    onHide={readModalClose}
                                                    // postid, posttitle, postdes, crime, crimedate, photofilename
                                                    postid={postid}
                                                    posttitle={posttitle}
                                                    postdes={postdes}
                                                    crime={crime}
                                                    crimedate={crimedate}
                                                    photofilename={photofilename}

                                                />
                                            </ButtonToolbar>
                                        </div>

                                    </Card.Body>
                                </Card>
                            </div>
                        </div>
                    )}

                </div>
            </div>
        )
    }
}

export default AllPosts;
