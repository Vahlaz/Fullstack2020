import { useQuery } from '@apollo/client'
import React, { useState } from 'react'
import { GENRE_BOOKS, ME } from './queries'

const Recommendations = (props) => {
  const [genre, setGenre] = useState('')
  const user = useQuery(ME)
  const books = useQuery(GENRE_BOOKS, { variables: { genre } })

  if (!props.show) {
    return null
  }

  if (user.loading) {
    return null
  }
  if (!genre) {
    setGenre(user.data.me.favoriteGenre)
  }
  if (books.loading) {
    return null
  }

  return (
    <div>
      <h2>books in your favorite genre {user.data.me.favoriteGenre}</h2>
      <table>
        <tbody>
          <tr>
            <th></th>
            <th>author</th>
            <th>published</th>
          </tr>
          {books.data.allBooks.map((a) => (
            <tr key={a.title}>
              <td>{a.title}</td>
              <td>{a.author.name}</td>
              <td>{a.published}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

export default Recommendations
