import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import {
  reduxError,
  reduxSuccess,
  reduxReset,
} from '../reducers/notificationReducer'

const Notification = () => {
  const ihaok = useSelector((state) => state.notifications)
  const dispatch = useDispatch()
  console.log(ihaok)

  const timer = () => {
    const timer1 = setTimeout(() => {
      dispatch(reduxReset())
    }, 5000)
    return timer1
  }

  useEffect(
    () => {
      clearTimeout(timer())
      timer()
    },
    [ihaok],
    [timer]
  )

  if (!ihaok.data) {
    return null
  }
  if (ihaok.type === 'ERROR') {
    return <div className='error'>{ihaok.data}</div>
  }
  if (ihaok.type === 'SUCCESS') {
    return <div className='success'>{ihaok.data}</div>
  }
}

export default { Notification }
