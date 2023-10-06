const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
    name: { type: String, required: true },
    emailOrPhone: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    username: { type: String, required: true, unique: true },
    role: { type: String, required: true },
    gender: { type: String },
    dateOfBirth: { type: Date },
});

module.exports = mongoose.model("User", userSchema);
