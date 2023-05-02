import React from 'react';
import { Button, Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const NavigationBar = () => {
    return (
        <div>
            <Navbar collapseOnSelect expand="lg" bg="light" variant="light">
                <Container>
                 
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />

                    <h3>CookPaal</h3>
                    <Navbar.Collapse id="responsive-navbar-nav">
                        
                        <Nav className="mx-auto align-items-center">
                          
                                <Link to='/category/0'>Home</Link>
                         
                            <Nav.Link href="#pricing">About</Nav.Link>
                            <Nav.Link href="#pricing">Blog</Nav.Link>
                        </Nav>
                        <Nav>
                          
                           
                           
                                <Button variant="secondary">LogOut</Button>:
                                <Link to='/login '>
                                <Button variant="secondary">Login</Button>
                                </Link>
                                
                           
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    );
};

export default NavigationBar;