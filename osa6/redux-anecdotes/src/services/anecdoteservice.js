import axios from 'axios'

const baseUrl = 'http://localhost:3001/anecdotes'

const getAll = async () => {
	const response = await axios.get(baseUrl)
	console.log(response.data)
	return response.data
}

const createNew = async (data) => {
	const object = { content: data, votes: 0 }
	const response = await axios.post(baseUrl, object)
	return response.data
}

const vote = async (id) => {
	const anecdotes = await getAll()
	const anecdote = anecdotes.find((anecdote) => anecdote.id === id)
	anecdote.votes = anecdote.votes + 1
	axios.put(`${baseUrl}/${id}`, anecdote)
	return anecdote
}

export default { getAll, createNew, vote }
