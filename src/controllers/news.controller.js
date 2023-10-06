const News = require("../models/news.model");

const addNews = async (req, res) => {
    try {
        // Validate and extract data from the request
        const { title, content, category } = req.body;

        // Create a new news article
        const newNews = new News({ title, content, category });

        // Save the news article to the database
        await newNews.save();

        res.status(201).json({ message: "News article added successfully" });
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: "Internal server error" });
    }
};

const getAllNews = async (req, res) => {
    try {
        // Retrieve all news articles from the database
        const news = await News.find().populate("category");

        res.status(200).json(news);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: "Internal server error" });
    }
};

const getNewsByCategoryId = async (req, res) => {
    try {
        // Implement logic to retrieve news articles by category ID

        // Example:
        const { categoryId } = req.params;
        const news = await News.find({ category: categoryId });

        res.status(200).json(news);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: "Internal server error" });
    }
};

module.exports = {
    addNews,
    getAllNews,
    getNewsByCategoryId
};
