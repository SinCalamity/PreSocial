import React, {useEffect, useState} from 'react'
import { Link, useParams } from 'react-router-dom'
import {Row, Col, Image, ListGroup, Button, Container, Card} from 'react-bootstrap'
// import creators from '../../Components/creators'
import axios from 'axios'


    

function CreatorDetailed() {
    const {id} = useParams()
    const [creator, setCreator] = useState([])

    useEffect(() => {
     async function fetchCreator() {
       const {data} = await axios.get('http://127.0.0.1:8000/api/creators/${id}')
       setCreator(data)
     }
     fetchCreator()
   }, [])


  return (
    <Container style={{paddingTop: "15vh"}}>
    <Row>
        <Col md={6}>
        <Image src={creator.image} alt={creator.name} fluid/>
        </Col>
        <Col md={3}>
        <ListGroup variant='flush'>
            <ListGroup.Item>
            <h3>{creator.name}</h3>
            </ListGroup.Item>
            <ListGroup.Item>
                {creator.description}
            </ListGroup.Item>
            <ListGroup.Item>
                {creator.rating} Stars
                <Container></Container>
                {creator.numReviews} Reviews
            </ListGroup.Item>
            <ListGroup.Item>
                Price: ${creator.price}
            </ListGroup.Item>
        </ListGroup>
        </Col>
        <Col md={3}>
        <Card>
            <ListGroup variant='flush'>
                <ListGroup.Item>
                    <Row>
                        <Col>Price:</Col>
                        <Col><strong>${creator.price}</strong></Col>
                    </Row>
                </ListGroup.Item>
                <ListGroup.Item>
                    <Row>
                        <Button
                        className='btn-block'
                        type='button'
  /*Add PayPal handler here*/
  /*Link to={Paypal} */
                        >
                            Add to Cart
                        </Button>
                    </Row>
                </ListGroup.Item>
            </ListGroup>
        </Card>
        </Col>
    </Row>
    </Container>
  )
}


export default CreatorDetailed