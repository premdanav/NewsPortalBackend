// Category Model
const mongoose = require("mongoose");

const categorySchema = new mongoose.Schema({
    name: { type: String, required: true },
    // Add more fields as needed for your category model
});

module.exports = mongoose.model("Category", categorySchema);
