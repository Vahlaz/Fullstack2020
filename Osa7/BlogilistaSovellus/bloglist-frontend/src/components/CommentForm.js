import React from 'react'
import { useDispatch } from 'react-redux'
import { Comment } from '../reducers/blogReducer'
import { Form, Button } from 'react-bootstrap'

const CommentForm = ({ id }) => {
  const dispatch = useDispatch()
  const handleSubmit = (event) => {
    event.preventDefault()
    console.log(event.target.content.value)
    dispatch(Comment(event.target.content.value, id))
  }
  return (
    <Form onSubmit={handleSubmit}>
      <Form.Group>
        <Form.Label><h3>Add New Comment</h3></Form.Label>
        <Form.Control type='text' id='content'/>
        <Button variant='primary' type='submit'>
          add comment
        </Button>
      </Form.Group>
    </Form>
  )
}

export default CommentForm
