const { getAllBooks } = require("../controllers/books");

const resolvers = {
  Query: {
    books: getAllBooks,
  },
};


module.exports = resolvers;