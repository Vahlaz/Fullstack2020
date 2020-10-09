import React from 'react'
import blogService from '../services/blogs'


const LikeButton =  ({blog, blogs, setBlogs}) => {
    
    let blogObject = {
        title: blog.title,
        author: blog.author,
        url: blog.url,
        likes: blog.likes + 1 ,
        id: blog.id
    }

    const handleClick = async (event) => {   
        console.log(blog.user, blogObject.user)
        console.log(blog.id, blogObject.id)
        await blogService.edit(blogObject)
        
        setBlogs(blogs.map(blog=> blog.id!== blogObject.id ? blog : blogObject))

    }
    return (
      <button onClick = {handleClick}>like</button>
    )
  } 

export default {LikeButton}