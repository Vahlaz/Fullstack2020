import React from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import LogOutButton from './logOutButton'
const NavBar = () => {
  const user = useSelector((state) => state.user)

  return (
    <div >
      <Link to='/'>home </Link>
      {'  '}
      <Link to='/users'>users </Link> 
      {user.name} {user.username}  
      <LogOutButton /> 
    </div>
  )
}

export default NavBar
