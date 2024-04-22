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

        <LinkContainer to="/Statistics">
            <Nav.Link>Statistics</Nav.Link>
        </LinkContainer>
            
        <LinkContainer to="/Posts">
            <Nav.Link>Posts</Nav.Link>
        </LinkContainer>

        <LinkContainer to="/Channels">
            <Nav.Link>Channels</Nav.Link>
        </LinkContainer>

        <LinkContainer to="/Messages">
            <Nav.Link>Messages</Nav.Link>
        </LinkContainer>

        <LinkContainer to="/Notifications">
            <Nav.Link>Notifications</Nav.Link>
        </LinkContainer>
        </Nav>
        </Navbar.Collapse>
        </Container>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        <Container className='me-auto'>
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