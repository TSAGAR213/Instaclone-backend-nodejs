const cloudinary = require("../../config/cloudinary");
const ApiError = require("../../utils/ApiError");
const postRepository = require("./post.repository");
const { validateCreatePost } = require("./post.validation");

const getPosts = async (query) => {
  const page = query.page ? Number(query.page) : undefined;
  const limit = query.limit ? Number(query.limit) : undefined;

  if ((query.page && !Number.isInteger(page)) || (query.limit && !Number.isInteger(limit))) {
    throw new ApiError(400, "page and limit must be integers");
  }

  if ((Number.isInteger(page) && page < 1) || (Number.isInteger(limit) && limit < 1)) {
    throw new ApiError(400, "page and limit must be greater than 0");
  }

  return postRepository.findAll({ page, limit });
};

const createPost = async ({ name, location, description, file }) => {
  validateCreatePost({ name, location, description, file });

  let uploadedImage;
  try {
    uploadedImage = await cloudinary.uploader.upload(file.path);
  } catch (err) {
    throw new ApiError(502, "Failed to upload image");
  }

  const payload = {
    name,
    location,
    description,
    PostImage: uploadedImage.url,
    date: new Date().toLocaleDateString(),
  };

  return postRepository.create(payload);
};

module.exports = {
  getPosts,
  createPost,
};
