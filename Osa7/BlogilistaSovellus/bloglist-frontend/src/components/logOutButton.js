import React from 'react'
import { userLogout } from '../reducers/userReducer'
import { useDispatch } from 'react-redux'
import { Button, Badge } from 'react-bootstrap'
const LogOutButton = ({ setUser }) => {
  const dispatch = useDispatch()
  const handleLogOut = (event) => {
    dispatch(userLogout())
  }

  return (
    <>
      <Badge pill variant='primary'>
        <Button size='sm' onClick={handleLogOut}>
          Logout
        </Button>
      </Badge>
    </>
  )
}

export default LogOutButton
