import React, { Component } from 'react';
import { Navbar, Nav, Form, FormControl, Button, Modal, Container, Row, Col, NavDropdown } from 'react-bootstrap';
import Logo from "../image/logo.png"
import App from '../App';
import "../App.css";

class Navigationbar extends Component {
    render() {
        if (localStorage.getItem('mail') != null) {
            return (
                <Navbar className='navb'>
                    <Nav className="container-fluid">
                        <Navbar.Brand href="#" className='navpadding'>
                            <img src={Logo} className='main_logo' />
                        </Navbar.Brand>
                        <Nav.Item className="mr-auto">
                        <NavDropdown
                            // id="nav-dropdown-example"
                            className='logo_link'
                            title={<span className='logo_link1'>My Account</span>}
                            
                        >
                            <NavDropdown.Item href="#action/3.1">Fee Payment</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.2">Payment History</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.3">Chat with us</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.4">Terms and Conditions</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.4">Logout</NavDropdown.Item>
                            <NavDropdown.Divider />
                            
                        </NavDropdown>
                        </Nav.Item>
                    </Nav>
                </Navbar>
            )
        }
        else {
            return (
                <Navbar className='navb'>
                    <Nav className="container-fluid">
                        <Navbar.Brand href="#" className='navpadding'>
                            <img src={Logo} className='main_logo' />
                        </Navbar.Brand>
                        <Nav.Item className="mr-auto">
                            <Nav.Link className='logo_link'>Login</Nav.Link>
                        </Nav.Item>
                    </Nav>
                </Navbar>
            )
        }


    }
}

export default Navigationbar;