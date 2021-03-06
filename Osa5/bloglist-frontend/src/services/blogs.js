import axios from 'axios'
const baseUrl = '/api/blogs'

const getAll = () => {
	const request = axios.get(baseUrl)
	return request.then((response) => response.data)
}

const create = async (blog) => {
	const config = {
		headers: { Authorization: token },
	}
	const response = await axios.post(baseUrl, blog, config)
	return response.data
}

const remove = async (id) => {
	const config = {
		headers: { Authorization: token },
	}
	const response = await axios.delete(`/api/blogs/${id}`, config)
	return response
}

let token = null

const setToken = (newToken) => {
	token = `bearer ${newToken}`
}

const edit = async (blog) => {
	console.log('here')
	console.log(blog)
	const response = await axios.put(`/api/blogs/${blog.id}`, blog)
	return response
}

export default { getAll, setToken, token, create, remove, edit }
