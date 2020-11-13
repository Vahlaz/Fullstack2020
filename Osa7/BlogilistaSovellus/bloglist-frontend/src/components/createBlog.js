import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import {  reduxSuccess } from '../reducers/notificationReducer'
import { createblog } from '../reducers/blogReducer'

const NewBlogForm = ({ test }) => {
  const [author, setAuthor] = useState('')
  const [title, setTitle] = useState('')
  const [url, setUrl] = useState('')
  const [formVisible, setFormVisible] = useState(false)

  const hideWhenVisible = { display: formVisible ? 'none' : '' }
  const showWhenVisible = { display: formVisible ? '' : 'none' }

  const dispatch = useDispatch()

  const createHandler = async (event) => {
    event.preventDefault()
    if (test) {
      test(title, author, url)
    } else {
      const newBlogObject = {
        title: title,
        author: author,
        url: url,
      }
      dispatch(createblog(newBlogObject))
      setAuthor('')
      setTitle('')
      setUrl('')

      dispatch(reduxSuccess(`created new blog ${newBlogObject.title}`))

      setFormVisible(false)
    }
  }

  return (
    <div>
      <h2>create new</h2>
      <div style={showWhenVisible}>
        <form onSubmit={createHandler} className='blogForm'>
          <div>
            title:
            <input
              id='title'
              type='text'
              value={title}
              name='Title'
              onChange={({ target }) => setTitle(target.value)}
            />
          </div>
          <div>
            author:
            <input
              id='author'
              type='text'
              value={author}
              name='Author'
              onChange={({ target }) => setAuthor(target.value)}
            />
          </div>
          <div>
            url:
            <input
              id='url'
              type='text'
              value={url}
              name='Url'
              onChange={({ target }) => setUrl(target.value)}
            />
          </div>
          <button type='submit' id='submit-button'>
            post
          </button>
        </form>
        <button onClick={() => setFormVisible(false)}>cancel</button>
      </div>
      <div style={hideWhenVisible}>
        <button onClick={() => setFormVisible(true)} id='Add-button'>
          Add new blog
        </button>
      </div>
    </div>
  )
}

export default NewBlogForm
