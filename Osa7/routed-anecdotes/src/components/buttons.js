import React from 'react'

export const Reset = ({ values }) => {
  const onSubmit = (event) => {
    event.preventDefault()
    values.content.onChange('')
    values.author.onChange('')
    values.url.onChange('')
  }

  return (
    <div>
      <button onClick={onSubmit}>reset</button>
    </div>
  )
}

export default null
