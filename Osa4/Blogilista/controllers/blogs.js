
const blogsRouter = require('express').Router()
const blog = require('../models/blog')

blogsRouter.get('/blogs', (request, response) => {
    blog
      .find({})
      .then(blogs => {
        response.json(blogs)
      })
  })
  
  blogsRouter.post('/blogs', (request, response) => {
    const blog = new Blog(request.body)
  
    blog
      .save()
      .then(result => {
        response.status(201).json(result)
      })
  })

  module.exports = blogsRouter
