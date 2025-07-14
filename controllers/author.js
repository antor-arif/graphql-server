const Author = require('../models/author.js');

const addAuthorController = async (authorData) => {
    const { name, bio, address, profileImage, dateOfBirth, email, phone, website, socialLinks } = authorData;

    console.log("Adding author with data:", authorData);

    if (!name || !email) {
        throw new Error("Name and email are required fields.");
    }

    const newAuthor = new Author({
        name,
        bio,
        address,
        profileImage,
        dateOfBirth: dateOfBirth ? new Date(dateOfBirth) : null,
        email,
        phone,
        website,
        socialLinks
    })

    try {
        const savedAuthor = await newAuthor.save();
        
        return savedAuthor;
    } catch (error) {
        throw new Error("Error saving author: " + error.message);
    }
};

const updateAuthorController = async (id, authorData) => {
    const { name, bio, address, profileImage, dateOfBirth, email, phone, website, socialLinks } = authorData;

    const author = await Author.findById(id);
    if (!author) {
        throw new Error("Author not found");
    }

    if (name) author.name = name;
    if (bio) author.bio = bio;
    if (address) author.address = address;
    if (profileImage) author.profileImage = profileImage;
    if (dateOfBirth) author.dateOfBirth = new Date(dateOfBirth);
    if (email) author.email = email;
    if (phone) author.phone = phone;
    if (website) author.website = website;
    if (socialLinks) author.socialLinks = socialLinks;

    try {
        const updatedAuthor = await author.save();
        return updatedAuthor;
    } catch (error) {
       throw new Error("Error updating author: " + error.message);
    }
};



const deleteAuthorController = async (id) => {
    const author = await Author.findByIdAndDelete(id);
    if (!author) {
        throw new Error("Author not found");
    }
    return { message: "Author deleted successfully" };
};

const getAllAuthorsController = async () => {
    try {
        const authors = await Author.find();
        return authors;
    } catch (error) {
        throw new Error("Error fetching authors: " + error.message);
    }
};


module.exports = {
    addAuthorController,
    updateAuthorController,
    deleteAuthorController,
    getAllAuthorsController
}