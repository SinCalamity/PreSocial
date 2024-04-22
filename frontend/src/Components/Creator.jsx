import React from 'react'
import { Card } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import creators from './creators'
function Creator({creator}) {
  return (
    <Card className='my-3 p-3 rounded'>
      <Link to={`/creator/${creator._id}`}>
        <Card.Img src={creator.image}/>
      </Link>

      <Card.Body>
      <Link to={`/creator/${creator._id}`}>
        <Card.Title as="div">
          <strong>{creator.name}</strong>
        </Card.Title>
      </Link>
      
      <Card.Text as="div">
        <div className='my-3'>
            {creator.rating} stars from {creator.numReviews} reviews
        </div>
    </Card.Text>

      <Card.Text>
        <h3>${creator.price}</h3>
      </Card.Text>
      </Card.Body>
    </Card>
  )
}

export default Creator