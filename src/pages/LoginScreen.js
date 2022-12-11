import React, { useState, useEffect,useCallback } from 'react'
import { Link } from 'react-router-dom'
import { Form, Button, Row, Col } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import Message from '../components/Message'
import Loader from '../components/Loader'
import FormContainer from '../components/FormContainer'
import { login } from '../actions/userActions'

const LoginScreen = ({ location, history }) => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const dispatch = useDispatch()

  const userLogin = useSelector((state) => state.userLogin)
  const { loading, error, userInfo } = userLogin

  const redirect = location.search ? location.search.split('=')[1] : '/'
  const loginAsAdmin =useCallback((e)=>{
        setEmail('admin@gmail.com');
        setPassword('123456')
      dispatch(login(email, password))
    },[dispatch, email, password])
    
    const loginAsDemo =useCallback((e)=>{
      setEmail('user@gmail.com');
        setPassword('123456');
      dispatch(login(email, password))
  },[dispatch, email, password])

  useEffect(() => {
    if (userInfo) {
      history.push(redirect)
    }
  }, [history, userInfo, redirect])

  useEffect(()=>{
    if(email === 'admin@gmail.com'){
      loginAsAdmin();
    }
    if(email === 'user@gmail.com'){
      loginAsDemo();
    }
  },[email, loginAsAdmin, loginAsDemo, password])
  

  const submitHandler = (e) => {
    e.preventDefault()
    dispatch(login(email, password))
  }
 
  const h1 = {
    color:'#23b7b7 !important '
  }
  const button = {
    backgroundColor:'#23b7b7',
    border:'0px',
    marginLeft:'10px'
  }

  return (
    <>
    {loading && <Loader />}
    <FormContainer>
      <h1 className='text-center' style={h1}>Sign In</h1>
      {error && <Message variant='danger'>{error}</Message>}
      
      <Form onSubmit={submitHandler}>
        <Form.Group controlId='email'>
          <Form.Label>Email Address</Form.Label>
          <Form.Control
            type='email'
            placeholder='Enter email'
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            autoComplete='off'
          ></Form.Control>
        </Form.Group>
        <Form.Group controlId='password'>
          <Form.Label>Password</Form.Label>
          <Form.Control
            type='password'
            placeholder='Enter password'
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            autoComplete='off'
          ></Form.Control>
        </Form.Group>
        <Row>
          <Col xs={12} className='d-flex justify-content-around'>
          <Button type='submit'  className='my-2  ' style={button}>
           Sign In
        </Button>
       
          </Col>
          
        </Row>
        
      </Form>

      <Row className='py-3'>
        <Col>
          New Customer?{' '}
          <Link to={redirect ? `/register?redirect=${redirect}` : '/register'}  >
            <span  style={{color:'aqua !important'}} className='register'>Register</span>
          </Link>
        </Col>
      </Row>
    </FormContainer>
    <Col className='d-flex justify-content-center'>
    <Button className='my-2  ' style={button} onClick={loginAsAdmin}>
    Sign In as Demo Admin
  </Button>
  <Button className='my-2 ' style={button} onClick={loginAsDemo} >
    Sign In as Demo User
  </Button></Col>
  </>
  )
}

export default LoginScreen
