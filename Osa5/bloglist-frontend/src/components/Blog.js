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
    <div style={hideWhenVisible}>
      <div key={blog.id}>
      {blog.title}
      </div>
      <button onClick={() => setBlogVisible(true)}>show</button>
    </div>
    <div style = {showWhenVisible}>
      <div>
        {`${blog.title}
        ${blog.author}
        ${blog.url}
        ${blog.likes}`} <Button.LikeButton blog = {blog} blogs ={blogs} setBlogs = {setBlogs}/>
      </div>
      <button onClick = {()=> setBlogVisible(false)}>hide</button>
      <RemoveButton blog = {blog} blogs = {blogs} user = {user} setBlogs = {setBlogs} />
    </div>
  </>
  )
}

const Blogs = ({ blogs, user, setBlogs }) => {
    const blogStyle = {
      paddingTop: 10,
      paddingLeft: 2,
      border: 'solid',
      borderWidth: 1,
      marginBottom: 5
    }

return ( 
  <div >
    {blogs.map(blog =><div style = {blogStyle} key={blog.id}> <SingleBlog blog = {blog} blogs = {blogs} user = {user} setBlogs = {setBlogs}/></div>)}
  </div>
  )
}

export default Blogs
