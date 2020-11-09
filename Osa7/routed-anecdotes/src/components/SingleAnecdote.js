import React from 'react'

const SingleAnecdote = ({ anecdote }) => {
  if (anecdote) {
    return (
      <div>
        <h2>{anecdote.content}</h2>
        has {anecdote.votes} votes
        <div style={{ paddingTop: 5, paddingBottom: 5 }}>
          for more info see <a href={`${anecdote.info}`}>{anecdote.info}</a>
        </div>
      </div>
    )
  } else {
    return (
      <>
        <h1>anecdote not found</h1>
      </>
    )
  }
}

export default SingleAnecdote
