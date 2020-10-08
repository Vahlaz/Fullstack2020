import React, { useState, useEffect } from 'react'
import Blog from './components/Blog'
import blogService from './services/blogs'
import Loginform from './components/loginform'
import LogOutButton from './components/logOutButton'
import BlogForm from './components/createBlog'
import Notification from './components/Notification'


const App = () => {
  const [blogs, setBlogs] = useState([])
  const [user, setUser]= useState(null)
  const [message, setMessage] = useState(null)
  const [error, setError] = useState(null)

  useEffect(() => {
    blogService.getAll().then(blogs =>
      setBlogs( blogs )
    )  
  }, [])

  useEffect(() => {
    const loggedUserJSON = window.localStorage.getItem('LoggedBlogAppUser')
    if (loggedUserJSON) {
      const user = JSON.parse(loggedUserJSON)
      setUser(user)
      blogService.setToken(user.token)
    }
  }, [])

if(user === null){
  return(
    <div>
      <h1>Login to application</h1>
      <Notification.Notification message = {error}/>
      <Loginform setUser ={setUser} setError ={setError} />
    </div>
  )
}

  return (
    <div>
      <h2>blogs</h2>
      <Notification.Message message = {message}/>
      <Notification.Notification message = {error}/>
      {user.name} logged in <LogOutButton setUser = {setUser}/>
      <BlogForm setMessage = {setMessage} setError = {setError}/>
      {blogs.map(blog =>
        <Blog key={blog.id} blog={blog} />
      )}
    </div>
  )
}

export default App