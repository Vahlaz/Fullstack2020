
import React, {useState} from 'react'
import blogService from '../services/blogs'
import Button from './blogButtons'

const RemoveButton =  ({user, blog, blogs, setBlogs}) => {
    const handleClick = async (event) => {
      
      event.preventDefault()
      if(window.confirm('Do you want to remove this blog?'))
      await blogService.remove(blog.id)
      setBlogs(blogs.filter(ihaok => ihaok.id !== blog.id))
    }
  
  if(user.username === blog.user.username){
      return (
      <button onClick = {handleClick}>remove</button>
      )
    }else {
      return null
    }
  } 
  

const SingleBlog = ({blog, blogs, user, setBlogs}) => {
    const [blogVisible, setBlogVisible] = useState(false)
    const hideWhenVisible = { display: blogVisible ? 'none' : '' }
    const showWhenVisible = { display: blogVisible ? '' : 'none' }
    return(
    <>
      <div style={hideWhenVisible} className = 'togglable'>
        <div key={blog.id}>
        {blog.title} {blog.author}
        </div>
        <button onClick={() => setBlogVisible(true)}>show</button>
      </div>
      <div style = {showWhenVisible} className = 'togglable'>
        <div>
          {`Title: ${blog.title}`}<br/>
          {`Author: ${blog.author}`}<br/>
          {`url: ${blog.url}`}<br/>
          {`likes: ${blog.likes}  `} <Button.LikeButton blog = {blog} blogs ={blogs} setBlogs = {setBlogs}/>
        </div>
        <button onClick = {()=> setBlogVisible(false)}>hide</button>
        <RemoveButton blog = {blog} blogs = {blogs} user = {user} setBlogs = {setBlogs} />
      </div>
    </>
    )
  }
  
  export default SingleBlog