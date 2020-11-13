import React from 'react'
import { Link } from 'react-router-dom'
import { Table } from 'react-bootstrap'

const AllUsers = ({ users }) => {
  if (users === null) {
    console.log('here')
    return null
  } else {
    return (
      <>
        <h2>Users</h2>
        <div>
          <Table striped>
            <thead>
              <tr>
                <th>Name</th>
                <th>blogs added</th>
              </tr>
            </thead>
            <tbody>
              {users.map((user) => (
                <tr key={user.id}>
                  <td>
                    <Link to={`/users/${user.id}`}> {user.name}</Link> {'     '}
                  </td>
                  <td>{user.blogs.length}</td>
                </tr>
              ))}
            </tbody>
          </Table>
        </div>
      </>
    )
  }
}

export default AllUsers
