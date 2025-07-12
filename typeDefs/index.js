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

  type Query {
    books: [Book]
  }
`;


module.exports = typeDefs;