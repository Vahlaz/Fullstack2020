import React, { useState } from 'react'
import { useQuery, useSubscription } from '@apollo/client'
import { BOOK_ADDED, GENRE_BOOKS } from './queries'
import { useApolloClient } from '@apollo/client'

const Books = (props) => {
  const [genre, setGenre] = useState('')
  const [books, setBooks] = useState(null)
  const result = useQuery(GENRE_BOOKS, { variables: { genre } })
  const [genres, setGenres] = useState(null)
  const client = useApolloClient()

  const UpdateCacheWith = (bookAdded) => {
    const includedIn = (set, object) => {
      set.map((b) => b.id).includes(object.id)
    }

    const dataInStore = client.readQuery({
      query: GENRE_BOOKS,
      variables: { genre: '' },
    })
    console.log(includedIn(dataInStore.allBooks, bookAdded))
    if (!includedIn(dataInStore.allBooks, bookAdded)) {
      const addBook = { ...bookAdded, __typename: 'Book' }
      client.writeQuery({
        query: GENRE_BOOKS,
        variables: { genre: '' },
        data: { allBooks: dataInStore.allBooks.concat(addBook) },
      })
    }
  }

  useSubscription(BOOK_ADDED, {
    onSubscriptionData: ({ subscriptionData }) => {
      window.alert('BOOK ADDED')
      UpdateCacheWith(subscriptionData.data.bookAdded)
    },
  })

  if (!props.show) {
    return null
  }

  if (result.loading) {
    return <div>loading...</div>
  }

  if (!books) {
    setBooks(result.data.allBooks)
  }

  if (!books) return null

  if (!genres) {
    const velikeissi = []
    result.data.allBooks.forEach((a) =>
      a.genres.forEach((genre) => velikeissi.push(genre))
    )
    setGenres([...new Set(velikeissi)])
    console.log(genres)
  }

  return (
    <div>
      <h2>books</h2>

      <table>
        <tbody>
          <tr>
            <th></th>
            <th>author</th>
            <th>published</th>
          </tr>
          {books.map((a) => (
            <tr key={a.title}>
              <td>{a.title}</td>
              <td>{a.author.name}</td>
              <td>{a.published}</td>
            </tr>
          ))}
        </tbody>
      </table>

      <form>
        {genres?.map((a) => (
          <label key={a}>
            <input
              type='radio'
              name='genre'
              value={a}
              onClick={() => setGenre(a)}
            />
            {a}
          </label>
        ))}
        <input
          type='radio'
          name='genre'
          value=''
          onClick={() => setGenre('')}
        />
        all genres
      </form>
    </div>
  )
}

export default Books
