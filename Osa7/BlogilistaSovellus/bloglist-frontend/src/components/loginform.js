import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { reduxError } from '../reducers/notificationReducer'
import { userLogin } from '../reducers/userReducer'
import { Button, Container, Form } from 'react-bootstrap'
const Loginform = () => {
  const [username, setUsername] = useState([])
  const [password, setPassword] = useState([])

  const dispatch = useDispatch()

  const loginHandler = async (event) => {
    event.preventDefault()
    console.log('trying to log in with', username, 'and ', password)
    try {
      dispatch(userLogin({ username, password }))
      setUsername('')
      setPassword('')
    } catch (e) {
      console.log('bruh')
      dispatch(reduxError('Error in login'))
      setUsername('')
      setPassword('')
    }
  }

  return (
    <Container>
      <h1>Login to Application</h1>
      <div>
        <Form onSubmit={loginHandler}>
          <Form.Label>Username: </Form.Label>
          <Form.Control
            id='username'
            type='text'
            value={username}
            name='Username'
            onChange={({ target }) => setUsername(target.value)}
          />
          <Form.Label></Form.Label>
          <Form.Control
            id='password'
            type='password'
            value={password}
            name='Password'
            onChange={({ target }) => setPassword(target.value)}
          />
          <Button type='submit'>Login</Button>
        </Form>
      </div>
    </Container>
  )
}

export default Loginform
