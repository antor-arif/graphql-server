const { addAuthorController, updateAuthorController, deleteAuthorController } = require("../controllers/author.js");
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
    // Books mutations
    addBook: async(_, bookData) => {
      await addBookController(bookData);
    },
    updateBook: async(_, { id, bookData }) => {
      return await updateBookController(id, bookData);
    },
    deleteBook: async(_, { id }) => {
      await deleteBookController(id);
    },
    // Authors mutations
    addAuthor: async(_, { authorData }) => {
      await addAuthorController(authorData);
    },
    updateAuthor: async(_, { id, authorData }) => {
      return await updateAuthorController(id, authorData);
    },
    deleteAuthor: async(_, { id }) => {
      return await deleteAuthorController(id);
    }

  }
};


module.exports = resolvers;