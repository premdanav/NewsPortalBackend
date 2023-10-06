const express = require("express");
const NewsController = require("../controllers/news.controller");

const router = express.Router();

// Add a new news article
router.post("/add", NewsController.addNews);

// Get all news articles
router.get("/all", NewsController.getAllNews);

// Get news articles by category ID
router.get("/category/:categoryId", NewsController.getNewsByCategoryId);

module.exports = router;


