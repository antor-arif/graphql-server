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


module.exports = {
    getAllBooks,
}