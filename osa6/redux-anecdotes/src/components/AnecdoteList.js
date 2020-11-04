import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { vote } from '../reducers/anecdoteReducer'
import { notification } from '../reducers/notificationReducer'

const AnecdoteList = () => {
	const anecdotes = useSelector((state) => {
		if (!state.filter) {
			return state.anecdotes
		} else {
			return state.anecdotes.filter((anecdote) =>
				anecdote.content.toLowerCase().includes(state.filter.toLowerCase())
			)
		}
	})

	const dispatch = useDispatch()
	const handleVote = (anecdote) => {
		dispatch(vote(anecdote.id))
		dispatch(notification(`voted ${anecdote.content}`, 5000))
	}

	return (
		<>
			{anecdotes
				.sort((a, b) => b.votes - a.votes)
				.map((anecdote) => (
					<div key={anecdote.id}>
						<div>{anecdote.content}</div>
						<div>
							has {anecdote.votes}
							<button onClick={() => handleVote(anecdote)}>vote</button>
						</div>
					</div>
				))}
		</>
	)
}
export default AnecdoteList
