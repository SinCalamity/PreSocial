import React from 'react'
import { Nav, Navbar, Container,  } from 'react-bootstrap';
import {NavLink} from 'react-router-dom'
import {LinkContainer} from 'react-router-bootstrap'

function HomeNav() {
return (
    <Navbar className="fixed-top" style={{position:"fixed",top:"0", width: "100%" }} expand="lg" bg='primary' variant='dark' collapseOnSelect>
        <Container>
            
                <NavLink to="/" >
            <Navbar.Brand>PreSocial</Navbar.Brand>
                </NavLink>
            
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
            <Nav>
            <LinkContainer to="/About">
                <Nav.Link>About</Nav.Link>
            </LinkContainer>
            
            <LinkContainer to="/Pricing">  
                <Nav.Link>Pricing</Nav.Link>
                </LinkContainer>    
            </Nav>
            </Navbar.Collapse>
            </Container>
            <Nav className='me-auto'>
            <LinkContainer to="/Login">
                <Nav.Link>Login</Nav.Link>
                </LinkContainer>
                
                <LinkContainer to="/SignUp">
                <Nav.Link>Sign Up</Nav.Link>
            </LinkContainer>
            </Nav>
            
    </Navbar>
)
}

export default HomeNav