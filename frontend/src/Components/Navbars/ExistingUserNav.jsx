import React from 'react'
import { NavDropdown, Nav, Navbar, Container } from 'react-bootstrap'
import { NavLink } from 'react-router-dom'
import { LinkContainer } from 'react-router-bootstrap'

function ExistingUserNav() {
return (
    <Navbar className="fixed-top" style={{position:"fixed",top:"0", width: "100%" }} expand="lg" bg='primary' variant='dark' collapseOnSelect>
    <Container>
    <NavLink to="/HomePage" >
            <Navbar.Brand>PreSocial</Navbar.Brand>
    </NavLink>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
        <Nav>
        <LinkContainer to="/creator/">
            <Nav.Link>Creators</Nav.Link>
        </LinkContainer>

        
        </Nav>
        </Navbar.Collapse>
        </Container>
        
        <Container className='me-auto' style={{paddingLeft: "75vh"}}>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
        <Nav>
        <LinkContainer to="/Profile">
            <Nav.Link>My Profile</Nav.Link>
        </LinkContainer>
        <NavDropdown title='My account' >
            <LinkContainer to="/Settings" style={{color: "black"}}>
            <Nav.Link>Settings</Nav.Link>
            </LinkContainer>
            
            <Nav.Link href="/Login" style={{color: "black"}}>
                Logout
            </Nav.Link>
            
        </NavDropdown>
        </Nav>
        </Navbar.Collapse>
        </Container>
</Navbar>
)
}

export default ExistingUserNav