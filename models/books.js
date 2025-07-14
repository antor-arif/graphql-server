const {Schema, model} = require('mongoose');



const bookSchema = new Schema({
    title:{
        type: String,
    },
    description:{
        type: String,
    },
    author: {
        type: Schema.Types.ObjectId,
        ref: 'Author',
        required: true,
    },
    publishedDate: {
        type: Date,
        default: Date.now,
    },
    genre: {
        type: String,
    },
    pages: {
        type: Number,
    },
    coverImage: {
        type: String,
    },
    price:{
        type: Number,
        required: true,
    },
    stock: {
        type: Number,
        default: 0,
    },
    ratings: {
        type: Number,
        default: 0,
    },
    discountPrice:{
        type: Number,
    },
    couponCode: {
        type: String,
    },
},{timestamps: true});



module.exports = model('Book', bookSchema);
