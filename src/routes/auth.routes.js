const express = require("express");
const AuthController = require("../controllers/auth.controller");

const router = express.Router();

// Register a new user
router.post("/register", AuthController.register);

// User login
router.post("/login", AuthController.login);

module.exports = router;
