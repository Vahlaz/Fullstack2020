const config = require('./utils/config')
const http = require('http')
const express = require('express')
const app = express()
const cors = require('cors')
const mongoose = require('mongoose')
const blogsRouter = require('./controllers/blogs')
const loginRouter = require('./controllers/login')
const usersRouter = require('./controllers/userRouter')
const tokenExtractor = require('./utils/middleware')

app.use(cors())
app.use(express.json())
app.use(tokenExtractor)
app.use('/api', blogsRouter)
app.use('/api/login', loginRouter)
app.use('/api/users', usersRouter)

if(process.env.NODE_ENV ==='test'){
    const testingRouter = require('./controllers/testingRouter')
    app.use('/api/testing', testingRouter)
}
console.log(config.MONGODB_URI)
const mongoUrl = config.MONGODB_URI
mongoose.connect(mongoUrl, { useNewUrlParser: true, useUnifiedTopology: true, useFindAndModify: false, useCreateIndex: true })


module.exports=app  