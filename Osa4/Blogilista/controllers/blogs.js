
const blogsRouter = require('express').Router()
const Blog = require('../models/blog')
const User = require('../models/user')

const getTokenFrom = request => {
  const authorization = request.get('authorization')
  if (authorization && authorization.toLowerCase().startsWith('bearer ')) {
    return authorization.substring(7)
  }
  return null
}


blogsRouter.get('/blogs', async (request, response) => {
    const blogs = await Blog.find({}).populate('user', {name:1, username:1, id:1})


    response.json(blogs.map(blog => blog.toJSON()))
  })
  
blogsRouter.post('/blogs', async (request, response) => {
  console.log(request.body)
  const body = request.body
  console.log(user)
  const token = getTokenFrom(request)
  const decodedToken = jwt.verify(request.token, process.env.SECRET)
  if (!token || !decodedToken.id) {
    return response.status(401).json({ error: 'token missing or invalid' })
  }
  const user = await User.findById(decodedToken.id)

  if(request.body.author && request.body.title){
    if(request.body.likes){
      const blog = new Blog({
        title:request.body.title,
        author:request.body.author,
        url:request.body.url,
        likes:request.body.likes,
        user: user._id
      })
      await blog.save()
      user.blogs = user.blogs.concat(blog._id)
      await user.save()
      response.status(201).json(blog)
    }else{
      const blog = new Blog({
        title:request.body.title,
        author:request.body.author,
        url:request.body.url,
        likes:0,
        user: user._id
      })
      await blog.save()
      response.status(201).json(blog)
      user.notes = user.notes.concat(savedNote._id)
      await user.save()
    }
  }else{
    response.status(400).end()
  }
})

blogsRouter.delete('/blogs/:id', async (request, response)=> {
  await Blog.findByIdAndRemove(request.params.id)
  response.status(204).end()
})

blogsRouter.put('/blogs/:id', async (request, response)=> {
  await Blog.findByIdAndUpdate(request.params.id, request.body)
  response.status(204).json(request.body)
  
})
  module.exports = blogsRouter
