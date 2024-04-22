import React from 'react'
import {Container, Button} from 'react-bootstrap'
import {Link} from 'react-router-dom'
function Pricing() {
  return (
    <div style={{paddingTop: "14vh",  }}>
      
      <div className='price'>
        <Container className='Free'>
          Free
        </Container>
        <Container>
          <ul>
          <li>Access to all forms of content</li>
          
          </ul>
        
        </Container>
        
        <Container style={{paddingLeft: "15vh", paddingBottom: "2vh"}}>
          <Link to="/Login">
          <Button variant='light'>Buy</Button>
          </Link>
        </Container>
        
      </div>
      <div className='prize'>
        <Container className='Paid'>
          Paid
        </Container>
        <Container>
          <ul>
            <li>Perks of Free + A certified pro</li>
          </ul>
        </Container>
        <Container style={{paddingLeft: "15vh", paddingBottom: "2vh"}}>
          <Link to='/Login'>
          <Button variant='light'>Buy</Button>
          </Link>
        </Container>
      </div>
    </div>
  )
}

export default Pricing