const express = require("express");
const CategoryController = require("../controllers/category.controller");

const router = express.Router();

// Add a new category
router.post("/add", CategoryController.addCategory);

// Get all categories
router.get("/all", CategoryController.getAllCategory);

module.exports = router;
