import React from 'react'
import { useSelector } from 'react-redux'

const Notification = () => {
  const message = useSelector((state) => state.notifications)

  if (!message.data) {
    return null
  }
  if (message.type === 'ERROR') {
    return <div className='error'>{message.data}</div>
  }
  if (message.type === 'SUCCESS') {
    return <div className='success'>{message.data}</div>
  }
}

export default Notification 
