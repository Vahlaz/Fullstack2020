import React from 'react'
import { useField } from '../hooks/index'
import { Reset } from './buttons'

const CreateNew = (props) => {
  const author = useField('text')
  const url = useField('text')
  const content = useField('text')

  const handleSubmit = (e) => {
    e.preventDefault()
    props.addNew({
      content: content.value,
      author: author.value,
      info: url.value,
      votes: 0,
    })
  }
  return (
    <div>
      <h2>create a new anecdote</h2>
      <form onSubmit={handleSubmit}>
        <div>
          content
          <input {...content} />
        </div>
        <div>
          author
          <input {...author} />
        </div>
        <div>
          url for more info
          <input {...url} />
        </div>
        <button>create</button>
      </form>
      <Reset
        values={{
          content: content,
          author: author,
          url: url,
        }}
      />
    </div>
  )
}

export default CreateNew
