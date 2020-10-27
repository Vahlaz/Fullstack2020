import React from 'react'
import blogService from '../services/blogs'

const RemoveButton = ({ user, blog, blogs, setBlogs }) => {
	const handleClick = async (event) => {
		event.preventDefault()
		if (window.confirm('Do you want to remove this blog?')) {
			await blogService.remove(blog.id)
			setBlogs(blogs.filter((ihaok) => ihaok.id !== blog.id))
		}
	}

	if (user.username === blog.user.username) {
		return <button onClick={handleClick}>remove</button>
	} else {
		return null
	}
}

const LikeButton = ({ blog, blogs, setBlogs, bruh }) => {
	let blogObject = {
		...blog,
		likes: blog.likes + 1,
		user: blog.user.id,
	}

	let blogObject2 = {
		...blogObject,
		user: blog.user,
	}

	const handleClick = async (event) => {
		if (bruh) {
			bruh()
		} else {
			await blogService.edit(blogObject)
			setBlogs(
				blogs.map((blog) => (blog.id !== blogObject.id ? blog : blogObject2))
			)
		}
	}
	return <button onClick={handleClick} id='like-button'>like</button>
}

export default { LikeButton, RemoveButton }
