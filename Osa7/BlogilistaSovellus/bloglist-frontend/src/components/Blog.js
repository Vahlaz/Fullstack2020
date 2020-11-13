import React from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { Table } from 'react-bootstrap'

const Blogs = ({ setBlogs }) => {
  const blogs = useSelector((state) => state.blogs)

  return (
    <div>
      <Table striped>
        <tbody>
          {blogs.map((blog) => (
            <tr key={blog.id}>
              <td>
                <Link to={`/blog/${blog.id}`}>
                  {blog.title} {blog.author}
                </Link>
              </td>
              <td>{blog.user.name}</td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  )
}

export default Blogs
