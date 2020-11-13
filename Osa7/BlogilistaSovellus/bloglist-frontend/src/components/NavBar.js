import React from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import LogOutButton from './logOutButton'
import { Nav, Navbar } from 'react-bootstrap'

const BlogNavBar = () => {
  const user = useSelector((state) => state.user)

  return (
    <>
      <Navbar bg='light'>
        <Navbar.Brand href='#' as='span'>
          <h1>BlogiLista</h1>
        </Navbar.Brand>
        <Nav className='mr-auto' variant='tabs'>
          <Nav.Link href='#' as='span'>
            <Link to='/'>Home</Link>
          </Nav.Link>
          <Nav.Link href='#' as='span'>
            <Link to='/users'>Users</Link>
          </Nav.Link>
        </Nav>
        <Nav>
          <Nav.Item>{user.name} logged in</Nav.Item>
          <Nav.Item>
            <LogOutButton />
          </Nav.Item>
        </Nav>
      </Navbar>
    </>
  )
}

export default BlogNavBar
