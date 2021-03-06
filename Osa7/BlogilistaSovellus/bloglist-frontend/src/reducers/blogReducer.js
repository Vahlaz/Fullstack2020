import blogService from '../services/blogs'

const blogReducer = (state = [], action) => {
  switch (action.type) {
    case 'INIT':
      console.log(action.data)
      const changedState = action.data.sort((a, b) => b.likes - a.likes)
      return changedState
    case 'ADD_BLOG':
      const changedBlogs = [...state, action.data]
      console.log(action.data)
      return changedBlogs
    case 'LIKE':
      const changedLikes = state
        .map((blog) => (blog.id !== action.data.id ? blog : action.data))
        .sort((a, b) => b.likes - a.likes)
      return changedLikes
    case 'REMOVE':
      const removedBlogs = state.filter((blog) => blog.id !== action.data.id)
      return removedBlogs
    case 'COMMENT':
      const CommentedBlog = state.find((blog) => blog.id === action.id)
      CommentedBlog.comments.push({ content: action.data, id: Math.random() })
      const velikeissi = state.map((blog) =>
        blog.id === CommentedBlog.id ? CommentedBlog : blog
      )
      return velikeissi
    default:
      return state
  }
}

export const createblog = (content) => {
  return async (dispatch) => {
    const data = await blogService.create(content)
    console.log(data)
    dispatch({
      type: 'ADD_BLOG',
      data: data,
    })
  }
}

export const Init = () => {
  return async (dispatch) => {
    const data = await blogService.getAll()
    dispatch({
      type: 'INIT',
      data: data,
    })
  }
}

export const Like = (data) => {
  return async (dispatch) => {
    await blogService.edit({ ...data, user: data.user.id })
    dispatch({
      type: 'LIKE',
      data: data,
    })
  }
}

export const Remove = (data) => {
  return async (dispatch) => {
    await blogService.remove(data.id)
    dispatch({
      type: 'REMOVE',
      data: data,
    })
  }
}

export const Comment = (data, id) => {
  return async (dispatch) => {
    await blogService.createComment(data, id)
    dispatch({
      type: 'COMMENT',
      data: data,
      id: id,
    })
  }
}

export default blogReducer
