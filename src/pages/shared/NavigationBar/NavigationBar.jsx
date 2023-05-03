import React, { useContext } from 'react';
import { Button, Container, Nav, Navbar } from 'react-bootstrap';
import { FaCaretSquareDown, FaUserCircle } from 'react-icons/fa';
import { Link, NavLink } from 'react-router-dom';
import { AuthContext } from '../../../Provider/AuthProvider';

const NavigationBar = () => {
    const {user, logOut} = useContext(AuthContext)

    const handleLogOut=()=>{
        logOut()
        .then()
        .catch(error=>console.log(error))
    }


    return (
        <div>
            <Navbar collapseOnSelect expand="lg" bg="light" variant="light">
                <Container>
                 
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />

                    <h3>CookPaal</h3>
                    <Navbar.Collapse id="responsive-navbar-nav">
                        
                        <Nav className="mx-auto align-items-center gap-2">
                        <li>
                        <NavLink 
                         to='/category/0'
                         aria-label='Home'
                         title='Home'
                         className={({ isActive }) => (isActive ? 'active' : 'default')}
                        > Home</NavLink>
                    </li>
                    <li>
                        <NavLink 
                         to='/blog'
                         aria-label='Statistics'
                         title='Statistics'
                         className={({ isActive }) => (isActive ? 'active' : 'default')}
                        >blog</NavLink>
                    </li>    
                         
                            
                            
                        </Nav>
                        <Nav>
                          
                           
                               { user && 
                                <FaUserCircle className='fs-2'></FaUserCircle>

                               }
                                 { user ?
                                <Button onClick={handleLogOut} variant="secondary">LogOut</Button>:
                                <Link to='/login '>
                                <Button variant="secondary">Login</Button>
                                </Link>
                                }
                                
                           
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    );
};

export default NavigationBar;