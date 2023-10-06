const jwt = require("jsonwebtoken");
const JWT_SECRET_KEY = "YourSecretKey"; // Replace with your secret key

const verifyToken = (req, res, next) => {
    const token = req.header("Authorization");

    if (!token) {
        return res.status(401).json({ error: "Access denied. Token missing." });
    }

    jwt.verify(token, JWT_SECRET_KEY, (err, decodedToken) => {
        if (err) {
            return res.status(403).json({ error: "Invalid token" });
        }

        // Attach the decoded user ID to the request for further use
        req.userId = decodedToken.userId;
        next();
    });
};

module.exports = verifyToken;
