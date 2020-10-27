import React from 'react'
import SingleBlog from './SingleBlog'

const Blogs = ({ blogs, user, setBlogs }) => {
	const blogStyle = {
		paddingTop: 10,
		paddingLeft: 2,
		border: 'solid',
		borderWidth: 1,
		marginBottom: 5,
	}
blogs = blogs.sort((a,b) => b.likes - a.likes)
	return (
		<div>
			{blogs.map((blog) => (
				<div style={blogStyle} key={blog.id}>
					{' '}
					<SingleBlog
						blog={blog}
						blogs={blogs}
						user={user}
						setBlogs={setBlogs}
					/>
				</div>
			))}
		</div>
	)
}

export default Blogs
