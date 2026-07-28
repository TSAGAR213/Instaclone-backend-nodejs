const mongoose = require("mongoose");
const env = require("./env");

const connectDb = async () => {
  if (!env.databaseUrl) {
    throw new Error("Missing DATABASE_URL in environment variables.");
  }

  await mongoose.connect(env.databaseUrl);
};

module.exports = connectDb;
