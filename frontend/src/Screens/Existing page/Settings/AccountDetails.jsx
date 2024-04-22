import React from 'react'
import {Button, Card, Container, ListGroup} from 'react-bootstrap'
import { Link } from 'react-router-dom'
function AccountDetails() {
  return (
    <Container style={{paddingTop: "15vh", }}>
        <h3>Settings</h3> 
        <Container>
            <Link to='/Settings/Basic'>
            Basic
            </Link>
            <Link to='/Settings/AccountDetails' style={{paddingLeft: "3vh"}}>
            Account
            </Link>
            <Link to='/Settings/MemberShips' style={{paddingLeft: "3vh"}}>
            MemberShips
            </Link>
        </Container>
        <Container className='settingform'>
        <Card style={{ borderRadius: "1vh", color: "white", background: "black" }}>
      <Card.Body>
        <Card.Title>Login</Card.Title>
        <input
        type='password'
        placeholder='Old Password'
        style={{width: "60vh", height: "5vh"}}
        />
        <Container></Container>
        <input
        type='password'
        placeholder='New Password'
        id='PW'
        style={{width: "60vh", height: "5vh", marginTop: "1vh"}}
        />
        <Container></Container>
        <input
        type='password'
        placeholder='Confirm Password'
        id='PW'
        style={{width: "60vh", height: "5vh", marginTop: "1vh"}}
        />
        <Button style={{marginLeft: "5vh"}} variant='secondary'>Update Password</Button>
      </Card.Body>

    </Card>
        </Container>
      <Container className='shippingform'>
      <Card style={{color: "white", background: "black", borderRadius: "1vh", paddingTop: "2vh", paddingBottom: "15vh"}}>
        <Card.Title  >Shipping Address</Card.Title>
        <Card.Body>
          Country
          <ListGroup variant='flush'>
            <input style={{width: "60vh", height: "5vh", marginTop: "1vh", marginBottom: "1vh"}}
            placeholder='United States'>
              
            </input>
            <Container></Container>
            Full Name
            <input style={{width: "60vh", height: "5vh", marginTop: "1vh", marginBottom: "1vh"}}
            placeholder='John Smith'>
              
            </input>
            <Container></Container>
            Address
            <input style={{width: "60vh", height: "5vh", marginTop: "1vh", marginBottom: "1vh"}}
            placeholder='123 Main Street'>
              
            </input>
            <Container></Container>
            City
            <input style={{width: "60vh", height: "5vh", marginTop: "1vh", marginBottom: "1vh"}}
            placeholder='New York'>
              
            </input>
            <Container></Container>
            State / Province
            <input style={{width: "60vh", height: "5vh", marginTop: "1vh"}}
            placeholder='NY'>
              
            </input>
            <Container></Container>
            Postal Code
            <input style={{width: "60vh", height: "5vh", marginTop: "1vh"}}
            placeholder='10001'>
              
            </input>
          </ListGroup>
          <Container style={{marginLeft: "35vh", marginTop: "2vh"}}>
          <Button variant='light'>Update</Button>
          </Container>
        </Card.Body>
      </Card>
      </Container>
    </Container>
    
  )
}

export default AccountDetails