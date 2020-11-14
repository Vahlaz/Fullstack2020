import React from 'react'
import { Link, useRouteMatch } from 'react-router-dom'
import {Table} from 'react-bootstrap'
const SingleUser = ({ users }) => {
  const match = useRouteMatch('/users/:id')
  if (users) {
    const userById = match ? users.find((a) => a.id === match.params.id) : null
    return (
      <>
        <h2> {userById.name} </h2>
        <Table striped>
          <thead>
            <tr>
              <th>Added Blogs</th>
            </tr>
          </thead>
          <tbody>
        {userById.blogs.map((blog) => (
          <tr key={blog.id}>
            <Link to={`/blog/${blog.id}`}>{blog.title} </Link>{' '}
          </tr>
        ))}
        </tbody>
        </Table>
      </>
    )
  }
  return null
}

export default SingleUser
