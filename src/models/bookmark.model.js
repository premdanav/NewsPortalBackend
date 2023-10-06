// Bookmark Model
const mongoose = require("mongoose");

const bookmarkSchema = new mongoose.Schema({
    // Define fields for the bookmark model, such as title, URL, etc.
    title: { type: String, required: true },
    url: { type: String, required: true },
    // Add more fields as needed for your bookmark model
});

module.exports = mongoose.model("Bookmark", bookmarkSchema);
