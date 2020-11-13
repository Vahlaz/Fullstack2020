import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { reduxError } from '../reducers/notificationReducer'
import { userLogin } from '../reducers/userReducer'

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
    <div>
      <form onSubmit={loginHandler}>
        <div>
          username
          <input
            id='username'
            type='text'
            value={username}
            name='Username'
            onChange={({ target }) => setUsername(target.value)}
          />
        </div>
        <div>
          password
          <input
            id='password'
            type='password'
            value={password}
            name='Password'
            onChange={({ target }) => setPassword(target.value)}
          />
        </div>
        <button id='login-button' type='submit'>
          login
        </button>
      </form>
    </div>
  )
}

export default Loginform
