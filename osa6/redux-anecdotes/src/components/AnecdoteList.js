import React from 'react'
import { connect } from 'react-redux'
import { vote } from '../reducers/anecdoteReducer'
import { notification } from '../reducers/notificationReducer'

const AnecdoteList = (props) => {
	const handleVote = (anecdote) => {
		props.vote(anecdote.id)
		props.notification(`voted ${anecdote.content}`, 5000)
	}

	return (
		<>
			{props.anecdotes
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

const mapStateToProps = (state) => {
	if (!state.filter) {
		return {
			anecdotes: state.anecdotes,
		}
	} else if (state.filter) {
		return {
			anecdotes: state.anecdotes.filter((anecdote) =>
				anecdote.content.toLowerCase().includes(state.filter.toLowerCase())
			),
		}
	}
}

const mapDispatchToProps = {
	vote,
	notification,
}
const ConnectedAnecdotes = connect(
	mapStateToProps,
	mapDispatchToProps
)(AnecdoteList)

export default ConnectedAnecdotes
