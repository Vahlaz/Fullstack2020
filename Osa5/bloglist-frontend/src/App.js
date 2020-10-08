import React, { useState, useEffect } from 'react'
import Blog from './components/Blog'
import blogService from './services/blogs'
import Loginform from './components/loginform'




const App = () => {
  const [blogs, setBlogs] = useState([])
  const [user, setUser]= useState(null)

  useEffect(() => {
    blogService.getAll().then(blogs =>
      setBlogs( blogs )
    )  
  }, [])

if(user === null){
  return(
    <div>
      <Loginform user = {user} setUser={setUser} />
    </div>
  )
}

  return (
    <div>
      <h2>blogs</h2>

      {blogs.map(blog =>
        <Blog key={blog.id} blog={blog} />
      )}
    </div>
  )
}

export default App