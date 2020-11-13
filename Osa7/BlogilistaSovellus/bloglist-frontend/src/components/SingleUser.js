import React from 'react'
import { useRouteMatch } from 'react-router-dom'

const SingleUser = ({ users }) => {
  const match = useRouteMatch('/users/:id')
  if (users) {
    const userById = match ? users.find((a) => a.id === match.params.id) : null
    return (
      <>
        <h2> {userById.name} </h2>
        {userById.blogs.map((blog) => (
          <> {blog.title} </>
        ))}
      </>
    )
  }
  return null
}

export default SingleUser
