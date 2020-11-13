import React from 'react'
import Button from './blogButtons'
import { useSelector } from 'react-redux'
import { useRouteMatch } from 'react-router-dom'
import CommetForm from './CommentForm'

const SingleBlog = () => {
  const blogs = useSelector((state) => state.blogs)
  const match = useRouteMatch('/blog/:id')
  if (blogs) {
    const blogById = match ? blogs.find((a) => a.id === match.params.id) : null

    if (blogById) {
      return (
        <>
          <div className='bruh'>
            <div>
              <h2>
                {blogById.title} by {blogById.author}{' '}
              </h2>
              <br />
              <a href={`${blogById.url}`}>{blogById.url}</a>
              <br />
              <div className='likes'>
                {`likes: ${blogById.likes}`}
                <Button.LikeButton blog={blogById} blogs={blogs} />
              </div>
              added by {blogById.user.name}
            </div>
            <Button.RemoveButton blog={blogById} />
            <div>
              <h3>comments</h3>
              {blogById.comments.map((comment) => (
                <li key={comment.id}>{comment.content}</li>
              ))}
              <CommetForm id={blogById.id} />
            </div>
          </div>
        </>
      )
    }
    return null
  }
  return null
}
export default SingleBlog
