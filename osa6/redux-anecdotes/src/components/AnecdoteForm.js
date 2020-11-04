import React from 'react'
import { useDispatch } from 'react-redux'
import { new_anecdote } from '../reducers/anecdoteReducer'
import { notification } from '../reducers/notificationReducer'

const AnecdoteForm = () => {
	const dispatch = useDispatch()
	const handleSubmit = (event) => {
		event.preventDefault()
		dispatch(new_anecdote(event.target.anecdote.value))
		dispatch(notification(`added ${event.target.anecdote.value}`, 5000))
		event.target.anecdote.value = ''
	}

	return (
		<>
			<h2>create new</h2>
			<form onSubmit={handleSubmit}>
				<div>
					<input type='text' name='anecdote' />
				</div>
				<button>create</button>
			</form>
		</>
	)
}
export default AnecdoteForm
