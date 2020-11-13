import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { reduxSuccess } from '../reducers/notificationReducer'
import { createblog } from '../reducers/blogReducer'
import { Button, Collapse, Form } from 'react-bootstrap'

const NewBlogForm = ({ test }) => {
  const [author, setAuthor] = useState('')
  const [title, setTitle] = useState('')
  const [url, setUrl] = useState('')
  const [open, setOpen] = useState(false)

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
      setOpen(!open)
    }
  }

  return (
    <div>
      <Button
        onClick={() => setOpen(!open)}
        aria-controls='blog-form'
        aria-expanded={open}
        variant='success'
        size='sm'
      >
        Add new blog
      </Button>
      <Collapse in={open}>
        <div id='blog-form'>
          <Form onSubmit={createHandler}>
            <Form.Group>
              <Form.Label>Title: </Form.Label>
              <Form.Control
                id='title'
                type='text'
                value={title}
                name='Title'
                onChange={({ target }) => setTitle(target.value)}
              />
              <Form.Label>Author: </Form.Label>
              <Form.Control
                id='author'
                type='text'
                value={author}
                name='Author'
                onChange={({ target }) => setAuthor(target.value)}
              />
              <Form.Label>Url: </Form.Label>
              <Form.Control
                id='url'
                type='text'
                value={url}
                name='Url'
                onChange={({ target }) => setUrl(target.value)}
              />
              <Button
                variant='success'
                size='sm'
                type='submit'
                id='submit-button'
              >
                post
              </Button>
            </Form.Group>
          </Form>
        </div>
      </Collapse>
    </div>
  )
}

export default NewBlogForm
