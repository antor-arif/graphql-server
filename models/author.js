const {Schema, model} = require('mongoose');

const authorSchema = new Schema({
    name: {
        type: String,
        required: true,
    },
    bio: {
        type: String,
    },
    address:{
        type: String,
    },
    profileImage: {
        type: String,
    },
    dateOfBirth: {
        type: Date
    },
    email:{
        type: String,
        required: true,
    },
    phone: {
        type: String,
    },
    website: {
        type: String,
    },
    socialLinks: {
        facebook: String,
        twitter: String,
        instagram: String,
        linkedin: String,
    },
},{timestamps: true});

module.exports = model("Author", authorSchema);