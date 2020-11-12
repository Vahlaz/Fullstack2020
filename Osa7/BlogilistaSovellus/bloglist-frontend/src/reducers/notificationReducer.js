const notificationReducer = (state = '', action) => {
  switch (action.type) {
    case 'ERROR':
      return action
    case 'SUCCESS':
      return action
    case 'RESET':
      return ''
    default:
      return state
  }
}

let timeoutId

export const reduxError = (data) => {
  return async (dispatch) => {
    dispatch({
      type: 'ERROR',
      data: data,
    })
    if (timeoutId) {
      clearTimeout(timeoutId)
    }

    timeoutId = setTimeout(() => {
      dispatch({
        type: 'RESET',
      })
    }, 5000)
  }
}

export const reduxSuccess = (data) => {
  return async (dispatch) => {
    dispatch({
      type: 'SUCCESS',
      data: data,
    })
    if (timeoutId) {
      clearTimeout(timeoutId)
    }

    timeoutId = setTimeout(() => {
      dispatch({
        type: 'RESET',
      })
    }, 5000)
  }
}

export default notificationReducer
