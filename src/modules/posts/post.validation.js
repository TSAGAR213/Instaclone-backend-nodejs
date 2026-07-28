const ApiError = require("../../utils/ApiError");

const validateCreatePost = ({ name, location, description, file }) => {
  if (!name || !location || !description) {
    throw new ApiError(400, "name, location, and description are required");
  }

  if (!file) {
    throw new ApiError(400, "PostImage file is required");
  }
};

module.exports = {
  validateCreatePost,
};
