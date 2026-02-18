const PostModel = require("./post.model");

const findAll = async ({ page, limit }) => {
  if (Number.isInteger(page) && Number.isInteger(limit)) {
    return PostModel.find()
      .sort({ createdAt: -1 })
      .skip((page - 1) * limit)
      .limit(limit);
  }

  return PostModel.find().sort({ createdAt: -1 });
};

const create = async (payload) => {
  const post = new PostModel(payload);
  return post.save();
};

module.exports = {
  findAll,
  create,
};
