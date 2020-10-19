import React from 'react'
import blogService from '../services/blogs'


const LikeButton =  ({blog, blogs, setBlogs}) => {
    
    let blogObject = {
        title: blog.title,
        author: blog.author,
        url: blog.url,
        likes: blog.likes + 1 ,
        id: blog.id,
        user: blog.user.id
    }

    let blogObject2 = {
      title: blog.title,
      author: blog.author,
      url: blog.url,
      likes: blog.likes + 1 ,
      id: blog.id,
      user: blog.user
    }

    const handleClick = async (event) => {   

        await blogService.edit(blogObject)
        
        setBlogs(blogs.map(blog=> blog.id!== blogObject.id ? blog : blogObject2))

    }
    return (
      <button onClick = {handleClick}>like</button>
    )
  } 

export default {LikeButton}