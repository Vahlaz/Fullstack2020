
const blogsRouter = require('express').Router()
const Blog = require('../models/blog')


blogsRouter.get('/blogs', async (request, response) => {
    const blogs = await Blog.find({})
    response.json(blogs.map(blog => blog.toJSON()))
  })
  
  blogsRouter.post('/blogs', async (request, response) => {
    console.log(request.body)
    if(request.body.author && request.body.title){
    if(request.body.likes){
    const blog = new Blog(request.body)
    await blog.save()
    response.status(201).json(blog)
    }else{
    const blog = new Blog({
      title:request.body.title,
      author:request.body.author,
      url:request.body.url,
      likes:0
    })
    await blog.save()
    response.status(201).json(blog)
    }
  }else {
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
