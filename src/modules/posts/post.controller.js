const asyncHandler = require("../../utils/asyncHandler");
const postService = require("./post.service");

const getPosts = asyncHandler(async (req, res) => {
  const posts = await postService.getPosts(req.query);
  res.json(posts);
});

const createPost = asyncHandler(async (req, res) => {
  const { name, location, description } = req.body;
  const post = await postService.createPost({
    name,
    location,
    description,
    file: req.file,
  });

  res.status(201).json(post);
});

module.exports = {
  getPosts,
  createPost,
};
