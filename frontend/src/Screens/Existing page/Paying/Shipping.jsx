import { useState } from "react"
import React from 'react'
import { Button, Form, Container } from "react-bootstrap"
function Shipping() {
    const [address, setAddress] = useState('')
    const [city, setCity] = useState('')
    const [postalcode, setPostalcode] = useState('')
    const [country, setCountry] = useState('')

    const submithandler = (e) => {
        e.preventDefault()
        console.log(address, city, postalcode, country)
    }

  return (
    <Container>
       <h1>Shipping</h1>
       <Form onSubmit={submithandler}>
        <Form.Group controlId='address'>
            <Form.Label>Address</Form.Label>
                <Form.Control
                required
                type='text'
                placeholder='Enter address'
                value={address ? address : ''} 
                onChange={(e) => setAddress(e.target.value)}
                >
                </Form.Control>
        </Form.Group>
        <Form.Group controlId='city'>
            <Form.Label>City</Form.Label>
                <Form.Control
                required
                type='text'
                placeholder='Enter city'
                value={city ? city : ''} 
                onChange={(e) => setCity(e.target.value)}
                >
                </Form.Control>
        </Form.Group>
        <Form.Group controlId='postalcode'>
            <Form.Label>Postal Code</Form.Label>
                <Form.Control
                required
                type='text'
                placeholder='Enter postal code'
                value={postalcode ? postalcode : ''} 
                onChange={(e) => setPostalcode(e.target.value)}
                >
                </Form.Control>
        </Form.Group>
        <Form.Group controlId='country'>
            <Form.Label>Country</Form.Label>
                <Form.Control
                required
                type='text'
                placeholder='Enter country'
                value={country ? country : ''} 
                onChange={(e) => setCountry(e.target.value)}
                >
                </Form.Control>
        </Form.Group>
        <Button type='submit' variant="primary">
            Continue
        </Button>
       </Form>
    </Container>
  )
}

export default Shipping