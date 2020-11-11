
const jwt = require('jsonwebtoken')
const blogsRouter = require('express').Router()
const Blog = require('../models/blog')
const User = require('../models/user')

blogsRouter.get('/blogs', async (request, response) => {
    const blogs = await Blog.find({}).populate('user', {name:1, username:1, id:1})


    response.json(blogs.map(blog => blog.toJSON()))
  })
  
blogsRouter.post('/blogs', async (request, response) => {
  console.log(request.body)
  const body = request.body
  if (!request.token) {
    return response.status(401).json({ error: 'token missing or invalid' })
  }
  const decodedToken = jwt.verify(request.token, process.env.SECRET)
  if (!request.token || !decodedToken.id) {
    return response.status(401).json({ error: 'token missing or invalid' })
  }
  const user = await User.findById(decodedToken.id)
  if(request.body.author && request.body.title){
    if(request.body.likes){
      const blog = new Blog({
        title:body.title,
        author:body.author,
        url:body.url,
        likes:body.likes,
        user: user._id
      })
      
      await blog.save()
      user.blogs = user.blogs.concat(blog._id)
      await user.save()
      response.status(201).json(blog)

    
    }else{
      const blog = new Blog({
        title:body.title,
        author:body.author,
        url:body.url,
        likes:0,
        user: user._id
      })

      await blog.save()
      response.status(201).json(blog)
      user.blogs = user.blogs.concat(blog._id)
      await user.save()
    }
  }else{
    response.status(400).json({error:"velitilanne"})
  }
})

blogsRouter.delete('/blogs/:id', async (request, response)=> {
  if (!request.token) {
    return response.status(401).json({ error: 'token missing or invalid' })
  }
  const decodedToken = jwt.verify(request.token, process.env.SECRET)
  const blog = await Blog.findById(request.params.id)

  if (!request.token || !decodedToken.id) {
    console.log('bruh')
    return response.status(401).json({ error: 'token missing or invalid' })
  }
    const user = await User.findById(decodedToken.id)
  if(blog.user.toString() === user.id.toString() ){
    console.log('here2')
    await Blog.findByIdAndRemove(request.params.id)
    response.status(204).json(request.body)
  }else{
    response.status(401).end()
  }

})

blogsRouter.put('/blogs/:id', async (request, response)=> {
    await Blog.findByIdAndUpdate(request.params.id, request.body)
    response.status(204).json(request.body)
  })

  module.exports = blogsRouter
