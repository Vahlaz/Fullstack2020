import React, { useEffect, useState } from 'react'
import blogService from './services/blogs'
import Blogs from './components/Blog'
import Loginform from './components/loginform'
import BlogForm from './components/createBlog'
import Notification from './components/Notification'
import { useDispatch, useSelector } from 'react-redux'
import { Init } from './reducers/blogReducer'
import { userInit } from './reducers/userReducer'
import { Switch, Route } from 'react-router-dom'
import AllUsers from './components/AllUsers'
import NavBar from './components/NavBar'
import SingleUser from './components/SingleUser'
import SingleBlog from './components/SingleBlog'

const App = () => {
  const dispatch = useDispatch()

  const [users, setUsers] = useState(null)

  useEffect(() => {
    blogService.getUsers().then((response) => {
      console.log(response)
      setUsers(response)
    })
  }, [])

  useEffect(() => {
    dispatch(Init())
  }, [dispatch])

  useEffect(() => {
    dispatch(userInit())
  }, [dispatch])

  const user = useSelector((state) => state.user)

  if (!user || user === null) {
    return (
      <div>
        <Notification />
        <Loginform />
      </div>
    )
  }

  return (
    <div className='container'>
      <NavBar />
      <Notification />
      <Switch>
        <Route path='/users/:id'>
          {' '}
          <SingleUser users={users} />
        </Route>
        <Route path='/users'>
          <AllUsers users={users} />
        </Route>
        <Route path='/blog/:id'>
          <SingleBlog />
        </Route>
        <Route path='/'>
          <BlogForm />
          <h2>All Blogs</h2>
          <Blogs />
        </Route>
      </Switch>
    </div>
  )
}

export default App
