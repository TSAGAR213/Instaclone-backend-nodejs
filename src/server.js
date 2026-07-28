const app = require("./app");
const env = require("./config/env");
const connectDb = require("./config/db");

const startServer = async () => {
  try {
    await connectDb();
    console.log("Connected to the cloud database");

    app.listen(env.port, () => {
      console.log(`server is at port ${env.port}`);
    });
  } catch (err) {
    console.error(`Error starting server: ${err.message}`);
    process.exit(1);
  }
};

startServer();
