const {
  ApolloServer,
  gql,
  UserInputError,
  AuthenticationError,
} = require('apollo-server')
const { v1: uuid } = require('uuid')
const mongoose = require('mongoose')
require('dotenv').config()
const Book = require('./components/schemas/BookSchema')
const Author = require('./components/schemas/AuthorSchema')
const User = require('./components/schemas/userSchema')
const jwt = require('jsonwebtoken')
const { PubSub } = require('apollo-server')
const pubsub = new PubSub()

const JWT_SECRET = 'HIMOLÄSKI'

mongoose
  .connect(process.env.MONGODB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: true,
    useCreateIndex: true,
  })
  .then(() => {
    console.log('connected to mongodb')
  })
  .catch((error) => {
    console.log('error connecting to mongodb', error.message)
  })


const typeDefs = gql`
  type Book {
    title: String!
    published: Int!
    author: Author!
    id: ID!
    genres: [String!]!
  }

  type Author {
    name: String!
    id: ID!
    born: Int
    bookCount: Int
  }

  type User {
    username: String!
    favoriteGenre: String!
    id: ID!
  }

  type Token {
    value: String!
  }

  type Query {
    bookCount: Int!
    authorCount: Int!
    allBooks(author: String, genre: String): [Book!]!
    allAuthors: [Author!]!
    me: User
  }

  type Mutation {
    addBook(
      title: String!
      published: Int!
      author: String!
      genres: [String!]!
    ): Book
    addAuthor(name: String!, born: Int): Author
    editAuthor(name: String!, setBornTo: Int!): Author
    createUser(username: String!, favoriteGenre: String!): User
    login(username: String!, password: String!): Token
  }

  type Subscription {
    bookAdded: Book!
  }
`

const resolvers = {
  Query: {
    bookCount: () => Book.collection.countDocuments(),
    authorCount: () => Author.collection.countDocuments(),
    allBooks: async (root, args) => {
      if (args.author) {
        const author = await Author.findOne({ name: args.author })
        const books = Book.find({ author: author._id }).populate('author')
        books
        return books
      } else if (args.genre) {
        console.log(args)
        return await Book.find({ genres: args.genre }).populate('author', {
          name: 1,
        })
      } else {
        return await Book.find({}).populate('author', { name: 1 })
      }
    },
    allAuthors: async (root, args) => {
      return Author.find({})
    },
    me: (root, args, context) => {
      console.log(context.currentUser)
      return context.currentUser
    },
  },
  Author: {
    bookCount: async (root, args) => {
      const rootAuth = root._id
      const books = await Book.find({ author: rootAuth })
      return books.length
    },
  },
  Mutation: {
    addBook: async (root, args, context) => {
      if (!context.currentUser) {
        throw new AuthenticationError('not authenticated')
      }
      const author = await Author.findOne({ name: args.author })
      if (author) {
        const book = new Book({ ...args, author: author._id })
        try {
          await book.save()
        } catch (error) {
          throw new UserInputError(error.message, {
            invalidArgs: args,
          })
        }
        const returnbook = await Book.findById(book._id).populate('author', {
          name: 1,
        })
        pubsub.publish('BOOK_ADDED', { bookAdded: { ...args, author: author } })
        return returnbook
      } else {
        const newAuthor = new Author({ name: args.author })
        console.log(newAuthor)
        try {
          await newAuthor.save()
        } catch (error) {
          throw new UserInputError(error.message, {
            invalidArgs: args,
          })
        }
        const book = new Book({ ...args, author: newAuthor._id })
        console.log(book)
        try {
          await book.save()
        } catch (error) {
          throw new UserInputError(error.message, { invalidArgs: args })
        }
        console.log(book)
        const returnbook = await Book.findById(book._id).populate('author', {
          name: 1,
        })

        pubsub.publish('BOOK_ADDED', {
          bookAdded: returnbook,
        })
        console.log(returnbook.title)

        return returnbook
      }
    },
    editAuthor: (root, args) => {
      if (!context.currentUser) {
        throw new AuthenticationError('not authenticated')
      }
      const author = authors.find((author) => author.name === args.name)
      if (author) {
        const updatedAuthor = { ...author, born: args.setBornTo }
        authors = authors.map((a) => (a.name === args.name ? updatedAuthor : a))
        return updatedAuthor
      } else {
        return null
      }
    },
    createUser: async (root, args) => {
      const user = new User({
        username: args.username,
        favoriteGenre: args.favoriteGenre,
      })
      try {
        return await user.save()
      } catch (error) {
        throw new UserInputError(error.message, { invalidArgs: args })
      }
    },
    login: async (root, args) => {
      const user = await User.findOne({ username: args.username })
      if (!user || args.password !== 'HIMOLÄSKI') {
        throw new UserInputError('wrong credentials')
      }
      const userForToken = {
        username: user.username,
        id: user._id,
      }
      return {
        value: jwt.sign(userForToken, JWT_SECRET),
      }
    },
  },
  Subscription: {
    bookAdded: {
      subscribe: () => pubsub.asyncIterator(['BOOK_ADDED']),
    },
  },
}

const server = new ApolloServer({
  typeDefs,
  resolvers,
  context: async ({ req }) => {
    const auth = req ? req.headers.authorization : null
    if (auth && auth.toLowerCase().startsWith('bearer ')) {
      const decodedToken = jwt.verify(auth.substring(7), JWT_SECRET)
      const currentUser = await User.findById(decodedToken.id)
      return { currentUser }
    }
  },
})

server.listen().then(({ url, subscriptionsUrl }) => {
  console.log(`Server ready at ${url}`)
  console.log(`subscriptions ready at ${subscriptionsUrl}`)
})
