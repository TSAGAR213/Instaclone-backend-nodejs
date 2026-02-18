const express = require("express");
const cors = require("cors");
const postRoutes = require("./modules/posts/post.routes");
const notFound = require("./middleware/notFound.middleware");
const errorMiddleware = require("./middleware/error.middleware");

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cors());

app.get("/", (req, res) => {
  res.send("Welcome to instaclone API");
});

app.use("/instagramUser", postRoutes);

app.use(notFound);
app.use(errorMiddleware);

module.exports = app;
