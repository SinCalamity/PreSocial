import React from 'react'
import { Nav, Navbar, Container,  } from 'react-bootstrap';
import {LinkContainer} from 'react-router-bootstrap'

function HomeNav() {
return (
    <Navbar className="fixed-top" style={{position:"fixed",top:"0", width: "100%" }} expand="lg" bg='primary' variant='dark' collapseOnSelect>
        <Container>
            
                <a href="/" >
            <Navbar.Brand>PreSocial</Navbar.Brand>
                </a>
            
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
            
            
    </Navbar>
)
}

export default HomeNav