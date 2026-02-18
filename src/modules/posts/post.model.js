const mongoose = require("mongoose");

const postSchema = new mongoose.Schema(
  {
    name: { type: String, required: true, trim: true },
    location: { type: String, required: true, trim: true },
    likes: { type: Number, required: true, default: 0 },
    description: { type: String, required: true, trim: true },
    PostImage: { type: String, required: true },
    date: { type: String, required: true },
  },
  { timestamps: true }
);

const PostModel = mongoose.model("InstaUsers", postSchema);

module.exports = PostModel;
