import React, { useState, useEffect } from 'react'
import Blog from './components/Blog'
import blogService from './services/blogs'
import Loginform from './components/loginform'
import LogOutButton from './components/logOutButton'



const App = () => {
  const [blogs, setBlogs] = useState([])
  const [user, setUser]= useState(null)

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
      <Loginform setUser ={setUser} />
    </div>
  )
}

  return (
    <div>
      <h2>blogs</h2>
      {user.name} logged in <LogOutButton setUser = {setUser}/>
      {blogs.map(blog =>
        <Blog key={blog.id} blog={blog} />
      )}
    </div>
  )
}

export default App