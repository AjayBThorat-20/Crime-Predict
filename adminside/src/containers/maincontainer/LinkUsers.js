import React, { Component } from 'react';
import { Table } from 'react-bootstrap';

import { Button, ButtonToolbar } from 'react-bootstrap';
import { LinkUsersModal } from '../subcontainer/LinkUsersModal';
import { Loader } from "../../components/Loader";

import "../../Styles/maincontainer/linkuser.css";

export class LinkUsers extends Component {


    constructor(props) {
        super(props);
        this.state = {
            links: [], readModalShow: false , loading: false
            // addccsWithoutFilter: []
        };
        // this.sortResult = this.sortResult.bind(this);



    }




    // sortResult(prop, asc) {
    //     var sortedData = this.state.addccsWithoutFilter.sort(function (a, b) {
    //         if (asc) {
    //             return (a[prop] > b[prop]) ? 1 : ((a[prop] < b[prop]) ? -1 : 0);

    //         }
    //         else {
    //             return (b[prop] > a[prop]) ? 1 : ((b[prop] < a[prop]) ? -1 : 0);
    //         }


    //     });

    //     this.setState({ links: sortedData });

    // }



    // refresh Crimes list
    refreshList() {
        fetch(process.env.REACT_APP_API + 'contactus')
            .then(response => response.json())
            .then(data => {
                this.setState({ links: data , loading: false });
            });
    }

    componentDidMount() {
        this.refreshList();
    }

    componentDidUpdate() {
        this.refreshList();
    }

    deletelink(linkid) {
        if (window.confirm('Are you sure')) {
            fetch(process.env.REACT_APP_API + 'contactus/' + linkid, {
                method: 'DELETE',
                header: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                }
            })
        }
    }
    render() {

        const { links, linkid, linkname, linkemail, linkmessages} = this.state;
        // let addModalClose = () => this.setState({ addModalShow: false });
        let readModalClose = () => this.setState({ readModalShow: false });
        return (


            <div className="container-contact">
                
                <div className="mt-5 d-flex justify-content-left">
                    <div className="container mt-2" >
                <h3 className="text-center" >User Queries</h3>
                </div>
                </div>

{this.state.loading ? 

<div className="justify-content-center"> <Loader/> </div> : 


            
            <div className="main-container "  >
                <Table className="mt-4 "  hover size="sm" >
                    <thead>
                        <tr>

                            <th className="obj-display" >
                                <div className="d-flex flex-row justify-content-center">


                                    {/* <button type="button" className="btn btn-light" onClick={() => this.sortResult('CrimeCardId', true)}>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" fill="currentColor" className="bi bi-arrow-down-square-fill" viewBox="0 0 16 16">
                                            <path d="M2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2zm6.5 4.5v5.793l2.146-2.147a.5.5 0 0 1 .708.708l-3 3a.5.5 0 0 1-.708 0l-3-3a.5.5 0 1 1 .708-.708L7.5 10.293V4.5a.5.5 0 0 1 1 0z" />
                                        </svg>
                                    </button> */}

                                    <h5 className="ml-2 mt-2 mr-2">Id</h5>

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


                
                            <h5 className="ml-2 mt-2 mr-2">Name</h5>

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

                            <h5 className="ml-4 mr-4">Email</h5>

                            </div >
                            </th>
                            <th>
                            <div className="d-flex flex-row justify-content-center">
                            <h5 className="ml-4 mr-4">Message</h5>
                            </div >
                            </th>
                            <th>

                            <div className="d-flex flex-row justify-content-center">
                                <h5 >Options</h5>
                            </div >
                            </th>
                        </tr>
                    </thead>
                    {links.map((link, index) =>
                    <tbody key={index}>

                       
                            <tr key={link.LinkId}>
                                <td className="obj-display"><p>{link.LinkUserId}</p></td>
                                <td className="data-center"><p>{link.LinkUserName}</p></td>
                                <td className="data-center"><p>{link.LinkUserEmail}</p></td>
                                <td className="data-center">
                                <p className="msg-data">{link.LinkUserMessage}</p></td>
                                
                                <td className="data-center">
                                    <div className="btn-tool">
                                    <ButtonToolbar >
                                        <Button className="btn-tool" variant="info"
                                            onClick={() => this.setState({ readModalShow: true, linkid: link.LinkUserId, linkname: link.LinkUserName,
                                             linkemail: link.LinkUserEmail, linkmessages: link.LinkUserMessage})}>
                                            Read
                                        </Button>


                                        {/* <Button style={{marginLeft:'0px',marginRight:'auto'}} variant="danger"
                                            onClick={() => this.deletelink(link.LinkUserId)}>
                                            Delete
                                        </Button> */}

                                        <LinkUsersModal show={this.state.readModalShow}
                                            onHide={readModalClose}
                                            linkid={linkid}
                                            linkname={linkname}
                                            linkemail={linkemail}
                                            linkmessages={linkmessages}  
                                            // date={date}  
                                            />
                                    </ButtonToolbar>

                                        </div>
                                </td>

                            </tr>

                    </tbody>
                    )}
                </Table>
                </div>
    }
            </div>
        )
    }
}

