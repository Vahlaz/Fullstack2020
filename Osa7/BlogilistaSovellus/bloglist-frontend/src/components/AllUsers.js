import React from 'react'
import { Link } from 'react-router-dom'

const AllUsers = ({ users }) => {
  if (users === null) {
    console.log('here')
    return null
  } else {
    return (
      <>
        <h2>Users</h2>
        <div>
          {users.map((user) => (
            <li key={user.id}>
              <Link to={`/users/${user.id}`}> {user.name}</Link> {'     '}
              {user.blogs.length}
            </li>
          ))}
        </div>
      </>
    )
  }
}

export default AllUsers
