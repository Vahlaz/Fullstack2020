import React from 'react'
import { userLogout } from '../reducers/userReducer'
import { useDispatch } from 'react-redux'

const LogOutButton = ({ setUser }) => {
  const dispatch = useDispatch()
  const handleLogOut = (event) => {
    dispatch(userLogout())
  }

  return (
    <div>
      <button onClick={handleLogOut}>Logout</button>
    </div>
  )
}

export default LogOutButton
