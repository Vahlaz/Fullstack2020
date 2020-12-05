import {gql} from '@apollo/client'

export const ALL_BOOKS = gql`
  query {
    allBooks {
      title
      author
      published
      genres
      id
    }
  }
`
export const ALL_AUTHORS = gql`
  query {
    allAuthors {
      name
      born
      bookCount
      id
    }
  }
`

export const ADD_BOOK = gql`
  mutation createbook(
    $title: String!
    $author: String!
    $publishedInt: Int!
    $genres: [String!]!
  ) {
    addBook(
      title: $title
      author: $author
      published: $publishedInt
      genres: $genres
    ) {
      title
    }
  }
`
