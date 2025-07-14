const Book = require("../models/books");

const books = [
    {
        id: 1,
        title: 'The Awakening',
        author: 'Kate Chopin',
    },
    {
        id: 2,
        title: 'City of Glass',
        author: 'Paul Auster',
    },
]

const getAllBooks = () => {
    return books;
}

const addBookController = async(props)  => {
    const { title, author, description, publishedDate, genre, pages, coverImage, price, stock, ratings, discountPrice, couponCode } = props;

    if(!title || !author || !price || !description) {
        return { error: "Title, author, price, and description are required fields." };
      }
      const newBook = new Book({
        title,
        author,
        description,
        publishedDate: publishedDate ? new Date(publishedDate) : undefined,
        genre,
        pages,
        coverImage,
        price,
        stock: stock || 0,
        ratings: ratings || 0,
        discountPrice,
        couponCode
      });
      try {
        const savedBook = await newBook.save();
        return savedBook;
      } catch (error) {
        return { error: "Error saving book: " + error.message };
      }
};


const updateBookController = async(id, props) => {
    const { title, author, description, publishedDate, genre, pages, coverImage, price, stock, ratings, discountPrice, couponCode } = props;

    const book = await Book.findById(id);
    if (!book) {
        throw new Error("Book not found");
    }
    if (title) book.title = title;
    if (author) book.author = author;
    if (description) book.description = description;
    if (publishedDate) book.publishedDate = new Date(publishedDate);
    if (genre) book.genre = genre;
    if (pages) book.pages = pages;  
    if (coverImage) book.coverImage = coverImage;
    if (price) book.price = price;
    if (stock) book.stock = stock;
    if (ratings) book.ratings = ratings;
    if (discountPrice) book.discountPrice = discountPrice;
    if (couponCode) book.couponCode = couponCode;
    try {
        const updatedBook = await book.save();
        return updatedBook;
    } catch (error) {
        return { error: "Error updating book: " + error.message };
    }
};

const deleteBookController = async(id) => {
    const book = await Book.findByIdAndDelete(id);
    if (!book) {
        return { error: "Book not found" };
    }
    return { message: "Book deleted successfully" };
};


module.exports = {
    getAllBooks,
    addBookController,
    updateBookController,
    deleteBookController
}