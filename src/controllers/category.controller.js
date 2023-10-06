const Category = require("../models/category.model");

const addCategory = async (req, res) => {
    try {
        // Validate and extract data from the request
        const { name } = req.body;

        // Create a new category
        const newCategory = new Category({ name });

        // Save the category to the database
        await newCategory.save();

        res.status(201).json({ message: "Category added successfully" });
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: "Internal server error" });
    }
};

const getAllCategory = async (req, res) => {
    try {
        // Retrieve all categories from the database
        const categories = await Category.find();

        res.status(200).json(categories);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: "Internal server error" });
    }
};

module.exports = {
    addCategory,
    getAllCategory
};
