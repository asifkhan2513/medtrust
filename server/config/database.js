// ./config/database.js
const mongoose = require("mongoose");
require("@dotenvx/dotenvx").config();

const connect = async () => {
  try {
    console.log("Attempting to connect to MongoDB...");
    const mongoUri = process.env.MONGODB_URL || process.env.MONGO_URI;
    const connection = await mongoose.connect(mongoUri);
    console.log("MongoDB connected successfully");
  } catch (error) {
    console.error("MongoDB connection failed:", error.message);
    console.log("Server will continue without database connection");
    // Don't exit the process, let the server run without DB for testing
  }
};

module.exports = { connect };
