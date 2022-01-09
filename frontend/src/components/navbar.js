import React, { Component } from 'react';
import { Navbar, Nav, Form, FormControl, Button, Modal, Container, Row, Col } from 'react-bootstrap';
import Logo from "../image/logo.png"
import App from '../App';
import "../App.css";

class Navigationbar extends Component {
    render() {
        return (
            <Navbar className='navb'>
                <Nav className="container-fluid">
                <Navbar.Brand href="#" className='navpadding'>
                    <img src={Logo} className='main_logo'/>
                </Navbar.Brand>
                
                    {/* <Nav.Link className='logo_link' href="#">More deets</Nav.Link> */}
                
                <Nav.Item className="mr-auto">
                    <Nav.Link className='logo_link'>Login</Nav.Link>
                </Nav.Item>
                </Nav>
            </Navbar>
            // <Navbar className="navb" variant="dark">
            // <Container>
            // <Navbar.Brand href="#home">Navbar</Navbar.Brand>
            // <Nav className="me-auto">
            // <Nav.Link href="#home">Home</Nav.Link>
            // <Nav.Link href="#features">Features</Nav.Link>
            // <Nav.Link href="#pricing">Pricing</Nav.Link>
            // </Nav>
            // </Container>
            // </Navbar>
        )
    }
}

export default Navigationbar;