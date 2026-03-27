// ./config/database.js
const mongoose = require("mongoose");
require("@dotenvx/dotenvx").config();

const connect = async () => {
  try {
   
    const mongoUri = process.env.MONGODB_URL || process.env.MONGO_URI;
    const connection = await mongoose.connect(mongoUri);
   
  } catch (error) {
    console.error("MongoDB connection failed:", error.message);
    
    // Don't exit the process, let the server run without DB for testing
  }
};

module.exports = { connect };
