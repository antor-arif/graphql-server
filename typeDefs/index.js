const Author = require('../models/author.js');
const typeDefs = `#graphql

  type Book {
    title: String
    author: String
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
  }

  type Query {
    books: [Book]
  }
  Book: {
    author: async(parent) => {
      return await Author.findById(parent.author);
    }
  }
  Author:{
    books: async(parent) => {
      return await Book.find({ author: parent._id });
    }
  }
`;


module.exports = typeDefs;