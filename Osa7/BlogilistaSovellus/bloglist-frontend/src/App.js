import React, { useEffect } from 'react'
import Blogs from './components/Blog'
import Loginform from './components/loginform'
import LogOutButton from './components/logOutButton'
import BlogForm from './components/createBlog'
import Notification from './components/Notification'
import { useDispatch, useSelector } from 'react-redux'
import { Init } from './reducers/blogReducer'
import { userInit } from './reducers/userReducer'

const App = () => {
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(Init())
  }, [dispatch])

  useEffect(() => {
    dispatch(userInit())
  }, [dispatch])

  const user = useSelector((state) => state.user)

  if (user === null) {
    return (
      <div>
        <h1>Login to application</h1>
        <Notification />
        <Loginform />
      </div>
    )
  }

  return (
    <div>
      <Notification />
      <h2>blogs</h2>
      {user.name} logged in <LogOutButton />
      <BlogForm />
      <Blogs user={user} />
    </div>
  )
}

export default App
