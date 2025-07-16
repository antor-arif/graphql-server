const Author = require('../models/author.js');
const typeDefs = `#graphql

 input SocialLinksInput {
  facebook: String
  twitter: String
  instagram: String
  linkedin: String
}

 input AuthorInput {
  name: String
  bio: String
  address: String
  profileImage: String
  dateOfBirth: String
  email: String
  phone: String
  website: String
  socialLinks: SocialLinksInput
  }

  input BookInput {
  title: String!
  author: ID!
  description: String!
  publishedDate: String
  genre: String
  pages: Int
  coverImage: String
  price: Float!
  stock: Int
  ratings: Float
  discountPrice: Float
  couponCode: String
  }

  type SocialLinks {
    facebook: String
    twitter: String
    instagram: String
    linkedin: String
  }

  type Author {
    name: String
    bio: String
    address: String
    profileImage: String
    dateOfBirth: String
    email: String
    phone: String
    website: String
    socialLinks: SocialLinks
    id: ID!
  }

  type Book {
    title: String
    author: Author
    description: String
    publishedDate: String
    genre: String
    pages: Int
    coverImage: String
    price: Float
    stock: Int
    ratings: Float
    discountPrice: Float
    couponCode: String
    id: ID!
  }


  type Query {
    books: [Book],
    book(id: ID!): Book,
    authors: [Author],
    author(id: ID!): Author
  }
  type Mutation {

    addBook(bookData: BookInput): Book
    updateBook(id: ID!, bookData: BookInput): Book
    deleteBook(id: ID!): String

    addAuthor(authorData: AuthorInput!): Author
    updateAuthor(id: ID!, authorData: AuthorInput!): Author
    deleteAuthor(id: ID!): String
  }
`;


module.exports = typeDefs;