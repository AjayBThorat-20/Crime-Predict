import React, { Component } from 'react';
import { Card } from 'react-bootstrap';
import { Loader } from "../../components/Loader";
import "../../Styles/maincontainer/displayhomecard.css";

export class DisplayHomeCard extends Component {


    constructor(props) {
        super(props);
        this.state = { addccs: [], loading: true };

    }


    refreshList() {
        fetch(process.env.REACT_APP_API + 'crimecards')
            .then(response => response.json())
            .then(data => {
                this.setState({ addccs: data, loading: false });
            });
    }

    componentDidMount() {
        this.refreshList();
    }

    componentDidUpdate() {
        this.refreshList();
    }



    render() {


        // importinga data
        const { addccs } = this.state;

        return (


            <div className="row-container ">


                <div className="mt-5 d-flex justify-content-left">
                    <div className="container mt-2" >
                        <h3 className="text-center" >Crime Data</h3>
                    </div>
                </div>

                <div className="main-card-container" >

                    {this.state.loading ?

                        <div className="justify-content-center"> <Loader /> </div> :

                        <div className="card-container">
                            <div className="main-containt">
                                {addccs.map(addcc =>
                                    <div className="float-left ml-2 mr-2 " key={addcc.CrimeCardId}>
                                        <Card className="card-item" >
                                            <Card.Body>
                                                {/* <Card.Text disabled > {addcc.CrimeCardId}</Card.Text> */}
                                                <Card.Title className="card-title">{addcc.CrimeCardTitle}</Card.Title>
                                                <Card.Subtitle className="mt-3"  ><p className="card-text2">{addcc.CrimeCardDes}</p></Card.Subtitle>
                                                <div className="mt-3"  >
                                                    <div className="card-url">
                                                    <Card.Link href={addcc.CrimeCardUrl}>More</Card.Link>
                                                    <Card.Link href="#">Another Link</Card.Link>
                                                    </div>
                                                </div>

                                            </Card.Body>
                                        </Card>
                                    </div>)}

                            </div>
                        </div>

                    }
                </div>
            </div>
        )
    }
}

