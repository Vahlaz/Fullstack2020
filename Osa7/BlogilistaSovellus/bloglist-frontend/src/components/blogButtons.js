import React from 'react'
import { Like, Remove } from '../reducers/blogReducer'
import { useDispatch, useSelector } from 'react-redux'
import { Button } from 'react-bootstrap'
import { useHistory } from 'react-router-dom'
import { reduxSuccess } from '../reducers/notificationReducer'

const RemoveButton = ({ blog }) => {
  const dispatch = useDispatch()
  const history = useHistory()
  const user = useSelector((state) => state.user)

  const handleClick = async (event) => {
    event.preventDefault()
    if (window.confirm('Do you want to remove this blog?')) {
      dispatch(Remove(blog))
      dispatch(reduxSuccess('blog removed successfully'))
      history.push('/')
    }
  }
  if (!user) {
    return null
  }
  console.log(blog)
  if (user.username === blog.user.username) {
    return (
      <Button variant='danger' size='sm' onClick={handleClick}>
        remove
      </Button>
    )
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
    <Button variant='success' size='sm' onClick={handleClick} id='like-button'>
      like
    </Button>
  )
}

export default { LikeButton, RemoveButton }
