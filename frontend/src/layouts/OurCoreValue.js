import React from 'react'
import { Card, Col, Container, Row } from 'react-bootstrap'
import OurCoreValues from '../data/OurCoreValues'

const OurCoreValue = () => {
  return (
    <Container className='animation-Left'>
      <Row>
        {OurCoreValues.map((coreValue) => (
          <Col key={coreValue._id}>
            <Card.Title as='h4' className='fw-bold'>{coreValue.name}</Card.Title>
            <Card.Body>
              <Row>
                <Col md={6}>
                  <Card.Text>{coreValue.description}</Card.Text>
                </Col>
                <Col md={6}>
                  <ol>
                    <li>{coreValue.honesty}</li>
                    <li>{coreValue.efficiency}</li>
                    <li>{coreValue.accountability}</li>
                    <li>{coreValue.transparency}</li>
                    <li>{coreValue.innovation}</li>
                    <li>{coreValue.security}</li>
                    <li>{coreValue.technology}</li>
                  </ol>
                </Col>
              </Row>
            </Card.Body>
          </Col>
        ))}
      </Row>
    </Container>
  )
}

export default OurCoreValue
