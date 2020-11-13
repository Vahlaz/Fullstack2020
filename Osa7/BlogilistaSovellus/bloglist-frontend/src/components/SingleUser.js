import React from 'react'
import { Link, useRouteMatch } from 'react-router-dom'

const SingleUser = ({ users }) => {
  const match = useRouteMatch('/users/:id')
  if (users) {
    const userById = match ? users.find((a) => a.id === match.params.id) : null
    return (
      <>
        <h2> {userById.name} </h2>
        <h3>added blogs</h3>
        {userById.blogs.map((blog) => (
          <li key={blog.id}>
            {' '}
            <Link to={`/blog/${blog.id}`}>{blog.title} </Link>{' '}
          </li>
        ))}
      </>
    )
  }
  return null
}

export default SingleUser
