import React from 'react'
import { useQuery, useMutation } from '@apollo/client'
import { ALL_AUTHORS, EDIT_AUTHOR } from './queries'

const Authors = (props) => {
  const result = useQuery(ALL_AUTHORS)
  const [editAuthor] = useMutation(EDIT_AUTHOR, {
    refetchQueries: [{ query: ALL_AUTHORS }],
  })
  const submit = (event) => {
    event.preventDefault()
    const name = event.target.ihaok.value
    const year = parseInt(event.target.year.value)
    console.log(name, year)
    editAuthor({ variables: { name, year } })
  }
  
  if (!props.show) {
    return null
  }

  if (result.loading) {
    return <div>loading...</div>
  }

  return (
    <div>
      <h2>authors</h2>
      <table>
        <tbody>
          <tr>
            <th></th>
            <th>born</th>
            <th>books</th>
          </tr>
          {result.data.allAuthors.map((a) => (
            <tr key={a.name}>
              <td>{a.name}</td>
              <td>{a.born}</td>
              <td>{a.bookCount}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <h2>Edit birthyear</h2>
      <form onSubmit={submit}>
        author:{' '}
        <select id='ihaok'>
          {result.data.allAuthors.map((a) => (
            <option value={a.name} key={a.id}>
              {a.name}
            </option>
          ))}
        </select>
        <br />
        birthyear: <input id='year' /> <br />
        <button type='submit'>update author</button>
      </form>
    </div>
  )
}

export default Authors
