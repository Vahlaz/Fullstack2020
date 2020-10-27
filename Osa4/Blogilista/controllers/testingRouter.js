const testingRouter = require('express').Router()
const User = require('../models/user')
const Blog = require('../models/blog')

testingRouter.get('/bruh',async( req, res) =>{
    console.log('here')
})

testingRouter.post('/reset', async ( req, response) => {
    await Blog.deleteMany({})
    await User.deleteMany({})
    response.status(204).end()
})

module.exports = testingRouter