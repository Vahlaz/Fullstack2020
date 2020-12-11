import React, { useEffect, useState } from 'react'
import Authors from './components/Authors'
import Books from './components/Books'
import NewBook from './components/NewBook'
import LoginForm from './components/LoginForm'
import Recommendations from './components/recommendations'
import { useApolloClient } from '@apollo/client'



const App = () => {
  const [page, setPage] = useState('authors')
  const [token, setToken] = useState(null)

  const client = useApolloClient()

  useEffect(() => {
    const user = localStorage.getItem('Library-user-token')
    if (user) {
      setToken(user)
    }
  }, [])

  const HandleLogOut = (event) => {
    event.preventDefault()
    localStorage.removeItem('Library-user-token')
    client.resetStore()
    setToken('')
  }

  if (!token)
    return (
      <div>
        <h2>Login</h2>
        <LoginForm setToken={setToken} />
      </div>
    )

  return (
    <div>
      <div>
        <button onClick={() => setPage('authors')}>authors</button>
        <button onClick={() => setPage('books')}>books</button>
        <button onClick={() => setPage('add')}>add book</button>
        <button onClick={()=> setPage('recommend')}>recommendations</button>
        <button onClick={HandleLogOut}>LogOut</button>
      </div>

      <Authors show={page === 'authors'} />

      <Books show={page === 'books'} />

      <NewBook show={page === 'add'} />
    
      <Recommendations show={page ==='recommend'}/>
    </div>
  )
}

export default App
