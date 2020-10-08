import React from 'react'

const Notification = ({ message }) => {
  if (message === null) {
    return null
  }

  return (
    <div className="error">
      {message}
    </div>
  )
}


const Message=({message})=>{
    if(message === null){
  return null
    }
    return(
      <div className = "success">
        {message}
      </div>
    )
  }

export default {Notification, Message}