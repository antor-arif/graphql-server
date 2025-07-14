const { getAllBooks, addBookController, updateBookController, deleteBookController } = require("../controllers/books");
const Author = require('../models/author.js');
const Book = require('../models/books.js');

const resolvers = {
  Query: {
    books: getAllBooks,
    book: async(_, { id }) => {
      const book = await Book.findById(id).populate('author');
      if (!book) {
        throw new Error("Book not found");
      }
      return book;
    }
  },
  Book: {
    author: async(parent) => {
      return await Author.findById(parent.author);
    }
  },
  Mutation: {
    addBook: async(_, props) => {
      await addBookController(props);
    },
    updateBook: async(_, { id, props }) => {
      return await updateBookController(id, props);
    },
    deleteBook: async(_, { id }) => {
      await deleteBookController(id);
    }
  }
};


module.exports = resolvers;