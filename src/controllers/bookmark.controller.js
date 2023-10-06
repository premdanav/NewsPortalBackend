const Bookmark = require("../models/bookmark.model");

const addBookmark = async (req, res) => {
    try {
        const { title, url } = req.body;
        const userId = req.userId; // Extracted from token via middleware

        const newBookmark = new Bookmark({ title, url, userId });
        await newBookmark.save();

        res.status(201).json({ message: "Bookmark added successfully" });
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: "Internal server error" });
    }
};

const getBookmarksByUserId = async (req, res) => {
    try {
        const userId = req.userId; // Extracted from token via middleware
        const bookmarks = await Bookmark.find({ userId });

        res.status(200).json(bookmarks);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: "Internal server error" });
    }
};

const deleteBookmarkById = async (req, res) => {
    try {
        const { bookmarkId } = req.params;
        await Bookmark.findByIdAndRemove(bookmarkId);

        res.status(200).json({ message: "Bookmark deleted successfully" });
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: "Internal server error" });
    }
};

module.exports = {
    addBookmark,
    getBookmarksByUserId,
    deleteBookmarkById
};
