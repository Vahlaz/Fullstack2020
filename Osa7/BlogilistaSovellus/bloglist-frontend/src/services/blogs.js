import axios from 'axios'

const baseUrl = '/api/blogs'

const getAll = async () => {
  const response = await axios.get(baseUrl)
  return response.data
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

const getUsers = async () => {
  const response = await axios.get('/api/users')
  return response.data
}

const createComment = async (data, id) => {
  const comment = {content: data}
  console.log(data)
  console.log(id)
  const response = await axios.post(`/api/blogs/${id}/comment`, comment)
  return response
}

export default { getAll, setToken, token, create, remove, edit, getUsers, createComment }
