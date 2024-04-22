import React from 'react'
import { Card, Container } from 'react-bootstrap'
import { Link } from 'react-router-dom'
function Membership() {
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
        <Card style={{ borderRadius: "1vh", background: "black", color: "white", paddingTop: "2vh" }}>
      <Card.Title>Creators you support</Card.Title>
        <Card.Body>
            
      
        </Card.Body>
    </Card>
        </Container>
    </Container>
    
  )
}

export default Membership