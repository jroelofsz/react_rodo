import React from 'react'
//Import navbar and nav
import { Navbar, Nav, Button } from 'react-bootstrap';
import { useAuth } from '../contexts/AuthContext';
import { useHistory } from 'react-router';
import { Redirect } from 'react-router';
import Logout from './Auth/Logout';
import './nav.css'


export default function Navigation() {
    const {logout, currentUser} = useAuth();
    const history = useHistory();

    function handleAuth(){
        logout();
        <Redirect to="#/login"/>
    }
    
    return (
        <Navbar variant="dark" bg="info" expand="md" className="navbar">
            <Navbar.Brand href="/">Todos</Navbar.Brand>
            {/* Hamburger button */}
            <Navbar.Toggle />
            {/* Everything below is what will be in the hamburger button */}
            <Navbar.Collapse className="justify-content-end">
                <Navbar.Text>
                    <Nav>
                        <Nav.Link href="#/home" className="text-white btn btn-dark m-1">Home</Nav.Link>
                        <Nav.Link href="#/todos" className="text-white btn btn-dark m-1">Todos</Nav.Link>
                        <Nav.Link href="#/categories" className="text-white btn btn-dark m-1">Categories</Nav.Link>
                        {currentUser ? 
                         <button onClick={() => handleAuth()} className="btn btn-danger m-1">Logout</button> : 
                         <Nav.Link href="#/login" className="btn btn-success text-white m-1">Login</Nav.Link> }
                    </Nav>
                </Navbar.Text>
            </Navbar.Collapse>
        </Navbar>
    )
}
