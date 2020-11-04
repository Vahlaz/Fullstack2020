import anecdoteservice from '../services/anecdoteservice'
const anecdotesAtStart = []

const getId = () => (100000 * Math.random()).toFixed(0)

const asObject = (anecdote) => {
	return {
		content: anecdote,
		id: getId(),
		votes: 0,
	}
}

export const vote = (id) => {
	console.log('voted')
	return async (dispatch) => {
		await anecdoteservice.vote(id)
		dispatch({
			type: 'VOTE',
			data: id,
		})
	}
}

export const new_anecdote = (content) => {
	return async (dispatch) => {
		const newAnecdote = await anecdoteservice.createNew(content)
		dispatch({
			type: 'NEW_ANECDOTE',
			data: newAnecdote.content,
		})
	}
}

export const initializeAnecdotes = () => {
	return async (dispatch) => {
		const anecdotes = await anecdoteservice.getAll()
		dispatch({
			type: 'INIT_ANEC',
			data: anecdotes,
		})
	}
}

const initialState = anecdotesAtStart.map(asObject)

const reducer = (state = initialState, action) => {
	switch (action.type) {
		case 'VOTE':
			const changedstate = state.map((anecdote) =>
				anecdote.id === action.data
					? { ...anecdote, votes: anecdote.votes + 1 }
					: anecdote
			)
			return changedstate
		case 'NEW_ANECDOTE':
			const newAnecdote = asObject(action.data)
			const newAnecdotes = state.concat(newAnecdote)
			return newAnecdotes
		case 'INIT_ANEC':
			return action.data
		default:
			return state
	}
}

export default reducer
