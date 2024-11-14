import React,{Component} from 'react';
import {NavLink } from 'react-router-dom';
import {Navbar,Nav,NavDropdown} from 'react-bootstrap';

export class Navigation extends Component{

    render(){

        return(
            <Navbar bg="dark" expand="lg">
                <Navbar.Toggle aria-controls="basic-navbar-nav"/>
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav >
                    <NavLink className='navbar-brand text-white' to='#!'><b>CP Admin</b></NavLink>
                       
                    <NavDropdown title={<span className="text-white">Home</span>} >
                                <NavDropdown.Item className="bg-dark">
                                    <NavLink to="/" className="d-inline p-2 text-white">
                                      Discplay Crime Card
                                    </NavLink>
                                </NavDropdown.Item >
                                <NavDropdown.Item className="bg-dark">
                                    <NavLink className="d-inline p-2 text-white" to="/createhomecard">
                                        Add Crime card
                                    </NavLink>
                                </NavDropdown.Item>
                            </NavDropdown>
                       
                            <NavLink className="d-inline p-2 bg-dark text-white" to="/addcrimes">
                                    Crimes
                            </NavLink>
                            <NavLink className="d-inline p-2 bg-dark text-white" to="/contactus">
                                    Link Users
                            </NavLink>    
                                
                                
                            <NavDropdown title={<span className="text-white">About Us</span>} >
                                <NavDropdown.Item className="bg-dark">
                                    <NavLink className="d-inline p-2 text-white" to="/about">
                                        About
                                    </NavLink>
                                </NavDropdown.Item >
                                <NavDropdown.Item className="bg-dark">
                                    <NavLink className="d-inline p-2 text-white" to="/vission">
                                        Vision
                                    </NavLink>
                                </NavDropdown.Item>
                            </NavDropdown>
                        
                            <NavLink className="d-inline p-2 bg-dark text-white" to="/team">
                                    Team
                                </NavLink>
                       
                            <NavDropdown title={<span className="text-white">Backgrounds</span>} >
                                <NavDropdown.Item className="bg-dark">
                                    <NavLink className="d-inline p-2 text-white" to="/aboutbg">
                                        About Bg
                                    </NavLink>
                                </NavDropdown.Item >
                                <NavDropdown.Item className="bg-dark">
                                    <NavLink className="d-inline p-2 text-white" to="/vissionbg">
                                        Vission Bg
                                    </NavLink>
                                </NavDropdown.Item>
                            </NavDropdown>
                       
                    </Nav>
                      
                   
                </Navbar.Collapse>
              
            </Navbar>
        )
    }
}

