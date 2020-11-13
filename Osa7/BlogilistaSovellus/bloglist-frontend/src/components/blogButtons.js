import React from 'react'
import { Like, Remove } from '../reducers/blogReducer'
import { useDispatch, useSelector  } from 'react-redux'


const RemoveButton = ({ blog }) => {
  const dispatch = useDispatch()
  const user = useSelector(state => state.user)
  
  const handleClick = async (event) => {
    event.preventDefault()
    if (window.confirm('Do you want to remove this blog?')) {
      dispatch(Remove(blog))
    }
  }

  if (user.username === blog.user.username) {
    return <button onClick={handleClick}>remove</button>
  } else {
    return null
  }
}

const LikeButton = ({ blog, blogs, bruh }) => {
  const dispatch = useDispatch()

  let blogObject = {
    ...blog,
    likes: blog.likes + 1,
    user: blog.user.id,
  }

  let blogObject2 = {
    ...blogObject,
    user: blog.user,
  }

  const handleClick = async (event) => {
    if (bruh) {
      bruh()
    } else {
      dispatch(Like(blogObject2))

      blogs.map((blog) => (blog.id !== blogObject.id ? blog : blogObject2))
    }
  }
  return (
    <button onClick={handleClick} id='like-button'>
      like
    </button>
  )
}

export default { LikeButton, RemoveButton }
