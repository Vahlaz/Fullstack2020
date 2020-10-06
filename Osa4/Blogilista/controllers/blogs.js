
const blogsRouter = require('express').Router()
const Blog = require('../models/blog')


blogsRouter.get('/blogs', async (request, response) => {
    const blogs = await Blog.find({})
    response.json(blogs.map(blog => blog.toJSON()))
  })
  
  blogsRouter.post('/blogs', async (request, response) => {
    console.log(request.body)
    const blog = new Blog(request.body)
    await blog.save()
        response.status(201).json(response.toJSON)

  })

  module.exports = blogsRouter
