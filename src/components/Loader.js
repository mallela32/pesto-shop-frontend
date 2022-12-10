import React from 'react'
 import { Spinner,Col } from 'react-bootstrap'
 

const Loader = () => {
  return (
    <Col className='d-flex justify-content-center'>
    <Spinner animation="border" variant="dark"  />
    </Col>
      
  )
}

export default Loader
