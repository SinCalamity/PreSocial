import React from 'react'
import { Card, Container } from 'react-bootstrap'
import { Link } from 'react-router-dom'
function Basic() {
  return (
    <Container style={{paddingTop: "15vh"}}>
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
        <Card style={{borderRadius: "1vh", color: "white", background: "black"  }}>
        <Card.Body>
            <Card.Title>Profile Information</Card.Title>
          Display name
          <Container>
            <input 
            type='user'
            placeholder='name'
            style={{color: "white", background: "black",width: "60vh"}}
            ></input>
          </Container>
          Email
          <Container>
            <input
            type='email'
            placeholder='mail'
            style={{color: "white", background: "black",width: "60vh"}}
            />
            </Container>
          Country of residence
          <Container>
          <input type='text'
            placeholder='country'
            style={{color: "white", background: "black",width: "60vh"}}
            />
          </Container>
        </Card.Body>
    </Card>
        </Container>
    </Container>
    
    
  )
}

export default  Basic