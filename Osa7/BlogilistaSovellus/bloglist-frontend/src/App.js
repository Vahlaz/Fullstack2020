import React, { useState, useEffect } from 'react'
import Blogs from './components/Blog'
import blogService from './services/blogs'
import Loginform from './components/loginform'
import LogOutButton from './components/logOutButton'
import BlogForm from './components/createBlog'
import Notification from './components/Notification'
import {useDispatch} from 'react-redux'
import {reduxError, reduxSuccess} from './reducers/notificationReducer'

const App = () => {
  const [blogs, setBlogs] = useState([])
  const [user, setUser] = useState(null)
  const dispatch = useDispatch()

  useEffect(() => {
    blogService.getAll().then((blogs) => setBlogs(blogs))
  }, [])

  useEffect(() => {
    const loggedUserJSON = window.localStorage.getItem('LoggedBlogAppUser')
    if (loggedUserJSON) {
      const user = JSON.parse(loggedUserJSON)
      setUser(user)
      blogService.setToken(user.token)
    }
  }, [])
  const handleClick = (event) => {
	  event.preventDefault()
	  dispatch(reduxSuccess('velikeissi'))
  }

  if (user === null) {
    return (
      <div>
        <h1>Login to application</h1>
        <Notification.Notification />
        <Loginform setUser={setUser} />
      </div>
    )
  }

  return (
    <div>
      <h2>blogs</h2>
	  <button onClick= {handleClick}>ihaok</button>
      <Notification.Notification />
      {user.name} logged in <LogOutButton setUser={setUser} />
      <BlogForm
        blogs={blogs}
        setBlogs={setBlogs}
      />
      <Blogs blogs={blogs} user={user} setBlogs={setBlogs} />
    </div>
  )
}

export default App
