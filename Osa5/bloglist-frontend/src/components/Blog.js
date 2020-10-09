import React, {useState} from 'react'

const SmallBlog = ({blog}) => {

  const [blogVisible, setBlogVisible] = useState(false)
  
  const hideWhenVisible = { display: blogVisible ? 'none' : '' }
  const showWhenVisible = { display: blogVisible ? '' : 'none' }

  return(
  <>
    <div style={hideWhenVisible}>
      <div key={blog.id}>
      {blog.title}
      </div>
      <button onClick={() => setBlogVisible(true)}>show</button>
    </div>
    <div style = {showWhenVisible}>
      <div>
        {`${blog.title}
        ${blog.author}
        ${blog.url}`}
      </div>
      <button onClick = {()=> setBlogVisible(false)}>hide</button>
    </div>
  </>
  )
}



const Blogs = ({ blogs }) => {
    const blogStyle = {
      paddingTop: 10,
      paddingLeft: 2,
      border: 'solid',
      borderWidth: 1,
      marginBottom: 5
    }

return ( 
  <div >
    {blogs.map(blog =><div style = {blogStyle} key={blog.id}> <SmallBlog blog = {blog}/></div>)}
  </div>
  )
}

export default Blogs
