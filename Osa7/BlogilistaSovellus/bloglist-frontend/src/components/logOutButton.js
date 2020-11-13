import React from 'react'
import { userLogout } from '../reducers/userReducer'
import { useDispatch } from 'react-redux'

const LogOutButton = ({ setUser }) => {
  const dispatch = useDispatch()
  const handleLogOut = (event) => {
    dispatch(userLogout())
  }

  return (
    <>
      <button onClick={handleLogOut}>Logout</button>
    </>
  )
}

export default LogOutButton
