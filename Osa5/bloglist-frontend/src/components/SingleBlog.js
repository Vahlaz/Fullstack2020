import React, { useState } from 'react'
import Button from './blogButtons'



const SingleBlog = ({ blog, blogs, user, setBlogs }) => {
	const [blogVisible, setBlogVisible] = useState(false)
	const hideWhenVisible = { display: blogVisible ? 'none' : '' }
	const showWhenVisible = { display: blogVisible ? '' : 'none' }
	return (
		<>
			<div style={hideWhenVisible} className='togglableContent'>
				<div key={blog.id}>
					{blog.title} {blog.author}
				</div>
				<button onClick={() => setBlogVisible(true)} id='show-button'>show</button>
			</div>
			<div style={showWhenVisible} className='bruh'>
				<div>
					{`Title: ${blog.title}`}
					<br />
					{`Author: ${blog.author}`}
					<br />
					{`url: ${blog.url}`}
					<div className='likes'>
					{`likes: ${blog.likes}`}{' '}
					</div>
					<Button.LikeButton blog={blog} blogs={blogs} setBlogs={setBlogs} />
				</div>
				<button onClick={() => setBlogVisible(false)}>hide</button>
				<Button.RemoveButton
					blog={blog}
					blogs={blogs}
					user={user}
					setBlogs={setBlogs}
				/>
			</div>
		</>
	)
}

export default SingleBlog
