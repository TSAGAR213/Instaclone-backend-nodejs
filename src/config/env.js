const dotenv = require("dotenv");

dotenv.config();

const env = {
  nodeEnv: process.env.NODE_ENV || "development",
  port: Number(process.env.PORT) || 8080,
  databaseUrl: process.env.DATABASE_URL,
  cloudinaryName: process.env.CLOUDINARY_CLOUD_NAME || "drmsakwmk",
  cloudinaryKey: process.env.CLOUDINARY_API_KEY || "162118638716756",
  cloudinarySecret: process.env.CLOUDINARY || process.env.CLOUDINARY_API_SECRET,
};

module.exports = env;
