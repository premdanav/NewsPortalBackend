const jwt = require("jsonwebtoken");
const User = require("../models/user.model");

const JWT_SECRET_KEY = "YourSecretKey"; // Replace with a strong and secret key

const register = async (req, res) => {
    try {
        // Validate request data (you can use a validation library like Joi)
        const { name, emailOrPhone, password, username, role, gender, dateOfBirth } = req.body;

        // Implement your validation logic here

        // Create a new user
        const newUser = new User({
            name,
            emailOrPhone,
            password,
            username,
            role,
            gender,
            dateOfBirth,
        });

        // Save the user to the database
        await newUser.save();

        res.status(201).json({ message: "User is registered successfully" });
    } catch (error) {
        console.error(error);
        res.status(400).json({ error: "Validation failed or user already exists" });
    }
};

const login = async (req, res) => {
    try {
        const { emailOrPhone, password } = req.body;

        // Check user credentials
        const user = await User.findOne({ emailOrPhone, password });

        if (!user) {
            return res.status(401).json({ error: "Invalid credentials" });
        }

        // Create a JWT token with user's ID and a secret key
        const token = jwt.sign({ userId: user._id }, JWT_SECRET_KEY, {
            expiresIn: "1h", // Token expiration time (e.g., 1 hour)
        });

        res.status(200).json({ token });
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: "Internal server error" });
    }
};

module.exports = {
    register,
    login
};
