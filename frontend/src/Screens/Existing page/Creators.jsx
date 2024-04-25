import React, {useState, useEffect} from 'react'
import {Row, Col, Container} from 'react-bootstrap'
import creators from '../creators'
import Creator from '../Components/Creator'
import axios from 'axios'

function CreatorsScreen() {
 const [creators, setCreators] = useState([])
 
 useEffect(() => {
  async function fetchCreators() {
    const {data} = await axios.get('http://127.0.0.1:8000/api/creators/')
    setCreators(data)
  }
  fetchCreators()
}, [])

  return (
    <Container style={{paddingTop: "15vh", }}>
      <h3>Creators</h3>
      <Row>
        {creators.map(creator => (
          <Col key={creator._id} sm={12} md={6} lg={4} xl={3}>
            <Creator creator={creator}/>
          </Col>
        ))}
      </Row>
    </Container>
  )
}

export default CreatorsScreen