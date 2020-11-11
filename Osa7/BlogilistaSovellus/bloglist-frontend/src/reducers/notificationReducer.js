export const reduxError = (data) => {
  return async (dispatch) => {
    dispatch({
      type: 'ERROR',
      data: data,
    })
  }
}

export const reduxSuccess = (data) => {
  return async (dispatch) => {
    dispatch({
      type: 'SUCCESS',
      data: data,
    })
  }
}

export const reduxReset = (data) => {
  return async (dispatch) => {
    dispatch({
      type: 'RESET',
    })
  }
}

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

export default notificationReducer
