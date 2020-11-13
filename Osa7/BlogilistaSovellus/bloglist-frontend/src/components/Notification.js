import React from 'react'
import { useSelector } from 'react-redux'
import { Alert } from 'react-bootstrap'

const Notification = () => {
  const message = useSelector((state) => state.notifications)

  if (!message.data) {
    return null
  }
  if (message.type === 'ERROR') {
    return <Alert variant='danger'>{message.data}</Alert>
  }
  if (message.type === 'SUCCESS') {
    return <Alert variant='success'>{message.data}</Alert>
  }
}

export default Notification
