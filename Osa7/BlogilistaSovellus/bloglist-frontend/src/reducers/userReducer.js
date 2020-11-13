import blogService from '../services/blogs'
import loginService from '../services/loginService'

const userReducer = (state = null, action) => {
  switch (action.type) {
    case 'userINIT':
      return action.data
    case 'LOGIN':
      return action.data
    case 'LOGOUT':
      return null
    default:
      return state
  }
}

export const userInit = () => {
  return async (dispatch) => {
    const loggedInUser = window.localStorage.getItem('LoggedBlogAppUser')
    if (loggedInUser) {
      const user = JSON.parse(loggedInUser)
      blogService.setToken(user.token)
      dispatch({
        type: 'userINIT',
        data: user,
      })
    }
  }
}

export const userLogin = (data) => {
  return async (dispatch) => {
    const user = await loginService.login({
      username: data.username,
      password: data.password,
    })
    if (user) {
      window.localStorage.setItem('LoggedBlogAppUser', JSON.stringify(user))
      blogService.setToken(user.token)
      dispatch({
        type: 'LOGIN',
        data: user,
      })
    } else {
      dispatch({
        type: '',
        data: '',
      })
    }
  }
}

export const userLogout = () => {
  return async (dispatch) => {
    window.localStorage.removeItem('LoggedBlogAppUser')
    dispatch({
      type: 'LOGOUT',
    })
  }
}

export default userReducer
