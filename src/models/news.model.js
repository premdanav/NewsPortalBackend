// News Model
const mongoose = require("mongoose");

const newsSchema = new mongoose.Schema({
    // Define fields for the news model, such as title, content, category, etc.
    title: { type: String, required: true },
    content: { type: String, required: true },
    category: { type: mongoose.Schema.Types.ObjectId, ref: "Category" }, // Reference to the Category model
    // Add more fields as needed for your news model
});

module.exports = mongoose.model("News", newsSchema);
