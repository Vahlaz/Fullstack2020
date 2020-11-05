export const notification = (notification, time) => {
  return async (dispatch) => {
    dispatch({
      type: "NOTIFICATION",
      data: notification,
    })

    setTimeout(
      () =>
        dispatch({
          type: "NOTIFICATION",
          data: "",
        }),
      time
    )
  }
}

const reducer = (state = "", action) => {
  switch (action.type) {
    case "NOTIFICATION":
      const changedState = action.data
      return changedState
    default:
      return state
  }
}

export default reducer
