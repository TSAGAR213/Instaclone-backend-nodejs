const express = require("express");
const upload = require("../../middleware/upload.middleware");
const postController = require("./post.controller");

const router = express.Router();

router.get("/", postController.getPosts);
router.post("/", upload.single("PostImage"), postController.createPost);

module.exports = router;
