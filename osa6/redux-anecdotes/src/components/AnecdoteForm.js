import React from 'react'
import { connect } from 'react-redux'
import { new_anecdote } from '../reducers/anecdoteReducer'
import { notification } from '../reducers/notificationReducer'

const AnecdoteForm = (props) => {
	const handleSubmit = (event) => {
		event.preventDefault()
		props.new_anecdote(event.target.anecdote.value)
		props.notification(`added ${event.target.anecdote.value}`, 5000)
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
const mapDispatchToProps = {
	new_anecdote,
	notification
}

const ConnectedAnecdoteForm = connect(null, mapDispatchToProps)(AnecdoteForm)
export default ConnectedAnecdoteForm
