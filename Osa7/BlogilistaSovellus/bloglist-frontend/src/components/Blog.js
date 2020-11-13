import React from 'react'
import SingleBlog from './SingleBlog'
import { useSelector } from 'react-redux'

const Blogs = ({ setBlogs }) => {
  const blogs = useSelector((state) => state.blogs)
  const blogStyle = {
    paddingTop: 10,
    paddingLeft: 2,
    border: 'solid',
    borderWidth: 1,
    marginBottom: 5,
  }

  return (
    <div>
      {blogs.map((blog) => (
        <div style={blogStyle} key={blog.id}>
          {' '}
          <SingleBlog
            blog={blog}
            blogs={blogs}
            setBlogs={setBlogs}
          />
        </div>
      ))}
    </div>
  )
}

export default Blogs
