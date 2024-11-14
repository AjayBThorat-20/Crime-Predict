import React, { Component } from 'react';
import { Table } from 'react-bootstrap';

import { Button, ButtonToolbar } from 'react-bootstrap';
import { AddCardModal } from '../subcontainer/AddCardModal';
import { EditCardModal } from '../subcontainer/EditCardModal';
import { Loader } from "../../components/Loader";

import "../../Styles/maincontainer/createhomecard.css"

export class CreateHomeCard extends Component {


    constructor(props) {
        super(props);
        this.state = {
            addccs: [], addModalShow: false, editModalShow: false,
            addccsWithoutFilter: [], loading: true
        };
        this.sortResult = this.sortResult.bind(this);



    }




    sortResult(prop, asc) {
        var sortedData = this.state.addccsWithoutFilter.sort(function (a, b) {
            if (asc) {
                return (a[prop] > b[prop]) ? 1 : ((a[prop] < b[prop]) ? -1 : 0);

            }
            else {
                return (b[prop] > a[prop]) ? 1 : ((b[prop] < a[prop]) ? -1 : 0);
            }


        });

        this.setState({ addccs: sortedData });

    }



    // refresh Crimes list
    refreshList() {
        fetch(process.env.REACT_APP_API + 'crimecards')
            .then(response => response.json())
            .then(data => {
                this.setState({ addccs: data, addccsWithoutFilter: data, loading: false });
            });
    }

    componentDidMount() {
        this.refreshList();
    }

    componentDidUpdate() {
        this.refreshList();
    }

    deletecrim(addccid) {
        if (window.confirm('Are you sure')) {
            fetch(process.env.REACT_APP_API + 'crimecards/' + addccid, {
                method: 'DELETE',
                header: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                }
            })
        }
    }
    render() {

        const { addccs, addccid, addcctitle, addccdes, addccurl} = this.state;
        let addModalClose = () => this.setState({ addModalShow: false });
        let editModalClose = () => this.setState({ editModalShow: false });
        return (
            <div>

<div className="mt-5 d-flex justify-content-left">
                    <div className="container mt-2" >
                <h3 className="text-center" >Create Home Card</h3>
                </div>
                </div>

            {this.state.loading ? 
            
            <div className="justify-content-center"> <Loader/> </div> :  
             
            <div className="container "  >
                {/* striped bordered */}
                <Table className="mt-4 "  hover size="sm" >
                    <thead>
                        <tr>

                            <th  className="obj-display">
                                <div className="d-flex flex-row">


                                    {/* <button type="button" className="btn btn-light" onClick={() => this.sortResult('CrimeCardId', true)}>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" fill="currentColor" className="bi bi-arrow-down-square-fill" viewBox="0 0 16 16">
                                            <path d="M2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2zm6.5 4.5v5.793l2.146-2.147a.5.5 0 0 1 .708.708l-3 3a.5.5 0 0 1-.708 0l-3-3a.5.5 0 1 1 .708-.708L7.5 10.293V4.5a.5.5 0 0 1 1 0z" />
                                        </svg>
                                    </button> */}

                                    <h5 className="ml-2 mt-2 mr-2 justify-content-center">Id</h5>

                                    {/* <button type="button" className="btn btn-light"
                                        onClick={() => this.sortResult('CrimeCardId', false)}>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" fill="currentColor" className="bi bi-arrow-up-square-fill" viewBox="0 0 16 16">
                                            <path d="M2 16a2 2 0 0 1-2-2V2a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H2zm6.5-4.5V5.707l2.146 2.147a.5.5 0 0 0 .708-.708l-3-3a.5.5 0 0 0-.708 0l-3 3a.5.5 0 1 0 .708.708L7.5 5.707V11.5a.5.5 0 0 0 1 0z" />
                                        </svg>
                                    </button> */}



                                </div>

                            </th>
                            <th>
                            <div className="d-flex flex-row justify-content-center">


                            {/* <button type="button" className="btn btn-light "
                                onClick={() => this.sortResult('CrimeCardTitle', true)}>
                                <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" fill="currentColor" className="bi bi-arrow-down-square-fill" viewBox="0 0 16 16">
                                    <path d="M2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2zm6.5 4.5v5.793l2.146-2.147a.5.5 0 0 1 .708.708l-3 3a.5.5 0 0 1-.708 0l-3-3a.5.5 0 1 1 .708-.708L7.5 10.293V4.5a.5.5 0 0 1 1 0z" />
                                </svg>
                            </button> */}

                            <h5 className="ml-2 mt-2 mr-2">Crime Title</h5>

                            {/* <button type="button" className="btn btn-light"
                                onClick={() => this.sortResult('CrimeCardTitle', false)}>
                                <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" fill="currentColor" className="bi bi-arrow-up-square-fill" viewBox="0 0 16 16">
                                    <path d="M2 16a2 2 0 0 1-2-2V2a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H2zm6.5-4.5V5.707l2.146 2.147a.5.5 0 0 0 .708-.708l-3-3a.5.5 0 0 0-.708 0l-3 3a.5.5 0 1 0 .708.708L7.5 5.707V11.5a.5.5 0 0 0 1 0z" />
                                </svg>
                            </button> */}
                            </div >
                            </th>
                            <th>
                            <div className="d-flex flex-row justify-content-center">

                            <h5 className="ml-4 mr-4">Crime Description</h5>

                            </div >
                            </th>
                            <th>
                            <div className="d-flex flex-row justify-content-center">

                            <h5 className="ml-4 mr-4">Url</h5>

                            </div >
                            </th>
                            <th>

                            <div className="d-flex flex-row justify-content-center">
                                <h5>Options</h5>
                            </div >
                            </th>
                        </tr>
                    </thead>

                    <tbody>


                        {addccs.map(addcc =>
                            <tr key={addcc.CrimeCardId}>
                                <td className="obj-display">{addcc.CrimeCardId}</td>
                                <td className="item-center">{addcc.CrimeCardTitle}</td>
                                <td className="item-center">{addcc.CrimeCardDes}</td>
                                <td className="item-center">{addcc.CrimeCardUrl}</td>
                                
                                <td>
                                    <ButtonToolbar>
                                        <Button className="mr-2" variant="info"
                                            onClick={() => this.setState({ editModalShow: true, addccid: addcc.CrimeCardId, addcctitle: addcc.CrimeCardTitle, addccdes: addcc.CrimeCardDes, addccurl: addcc.CrimeCardUrl })}>
                                            Edit
                                        </Button>



                                        <Button className="mr-2" variant="danger"
                                            onClick={() => this.deletecrim(addcc.CrimeCardId)}>
                                            Delete
                                        </Button>

                                        <EditCardModal show={this.state.editModalShow}
                                            onHide={editModalClose}
                                            addccid={addccid}
                                            addcctitle={addcctitle}
                                            addccdes={addccdes}
                                            addccurl={addccurl}  
                                            />
                                    </ButtonToolbar>


                                </td>

                            </tr>)}

                    </tbody>
                </Table>


                <ButtonToolbar>
                    <Button variant="primary"
                        onClick={() => this.setState({ addModalShow: true })}>
                        Add Card
                    </Button>


                    <AddCardModal show={this.state.addModalShow}
                        onHide={addModalClose} />
                </ButtonToolbar>
                </div>}
            </div>
        )
    }
}

