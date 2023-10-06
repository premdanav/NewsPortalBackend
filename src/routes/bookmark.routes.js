const express = require("express");
const BookmarkController = require("../controllers/bookmark.controller");


const router = express.Router();

router.post("/add", BookmarkController.addBookmark);
router.get("/user", BookmarkController.getBookmarksByUserId);
router.delete("/:bookmarkId", BookmarkController.deleteBookmarkById);

module.exports = router;
