import React, { Component } from 'react';
import { Table } from 'react-bootstrap';

import { Button, ButtonToolbar } from 'react-bootstrap';
import { AddCrimeModal } from '../subcontainer/AddCrimeModal';
import { EditCrimeModal } from '../subcontainer/EditCrimeModal';
import { Loader } from "../../components/Loader";
import "../../Styles/maincontainer/addcrime.css"

export class AddCrimes extends Component {


    constructor(props) {
        super(props);
        this.state = {
            crims: [], addModalShow: false, editModalShow: false,
            crimsWithoutFilter: [], loading: true
        };
        this.sortResult = this.sortResult.bind(this);



    }




    sortResult(prop, asc) {
        var sortedData = this.state.crimsWithoutFilter.sort(function (a, b) {
            if (asc) {
                return (a[prop] > b[prop]) ? 1 : ((a[prop] < b[prop]) ? -1 : 0);

            }
            else {
                return (b[prop] > a[prop]) ? 1 : ((b[prop] < a[prop]) ? -1 : 0);
            }


        });

        this.setState({ crims: sortedData });

    }



    // refresh Crimes list
    refreshList() {
        fetch(process.env.REACT_APP_API + 'crimes')
            .then(response => response.json())
            .then(data => {
                this.setState({ crims: data, crimsWithoutFilter: data, loading: false });
            });
    }

    componentDidMount() {
        this.refreshList();
    }

    componentDidUpdate() {
        this.refreshList();
    }

    deletecrim(crimid) {
        if (window.confirm('Are you sure')) {
            fetch(process.env.REACT_APP_API + 'crimes/' + crimid, {
                method: 'DELETE',
                header: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                }
            })
        }
    }
    render() {

        const { crims, crimid, crimname } = this.state;
        let addModalClose = () => this.setState({ addModalShow: false });
        let editModalClose = () => this.setState({ editModalShow: false });
        return (
            <div>

                <div className="mt-5 d-flex justify-content-left">
                    <div className="container mt-2" >
                        <h3 className="text-center" >Crime Type's</h3>
                    </div>
                </div>

                {this.state.loading ?

                    <div className="justify-content-center" > <Loader /> </div> :


                    <div className="container"  >
                        <div className="main-table" >

                        <Table className="mt-4" hover size="sm" >
                            <thead>
                                <tr>

                                    <th className="obj-display">
                                        <div className="d-flex flex-row">
                                            <h5 className="ml-2 mt-2 mr-2 justify-content-center">Id</h5>
                                        </div>

                                    </th>
                                    <th>
                                        <div className="d-flex flex-row justify-content-center">

                                            <h5 className="ml-2 mt-2 mr-2">Crime Type</h5>

                                        </div >
                                    </th>
                                    <th>
                                        <div className="d-flex flex-row justify-content-center">
                                        <div className="ml-5">
                                            <h5 className="ml-3 mt-2 mr-2">Options</h5>
                                        </div >
                                        </div>
                                    </th>
                                </tr>
                            </thead>

                            <tbody>


                                {crims.map(crim =>
                                    <tr key={crim.CrimesId}>
                                        <td className="obj-display">{crim.CrimesId}</td>
                                        <td className="data-text" >{crim.CrimesName}</td>
                                        <td className="data-text">
                                           <div className="option-btn " >
                                                <Button className="mr-2 ml-5" variant="info"
                                                    onClick={() => this.setState({ editModalShow: true, crimid: crim.CrimesId, crimname: crim.CrimesName })}>
                                                    Edit
                                                </Button>



                                                <Button className="mr-2" variant="danger"
                                                    onClick={() => this.deletecrim(crim.CrimesId)}>
                                                    Delete
                                                </Button>

                                                <EditCrimeModal show={this.state.editModalShow}
                                                    onHide={editModalClose}
                                                    crimid={crimid}
                                                    crimname={crimname} />
                                           </div>
                                        </td>

                                    </tr>)}

                            </tbody>
                        </Table>
                    

                        <ButtonToolbar>
                            <Button variant="primary"
                                onClick={() => this.setState({ addModalShow: true })}>
                                Add Crimes
                            </Button>


                            <AddCrimeModal show={this.state.addModalShow}
                                onHide={addModalClose} />
                        </ButtonToolbar>
                        </div>
                    </div>}
            </div>
        )
    }
}