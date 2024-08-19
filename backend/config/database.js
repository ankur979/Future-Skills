const mongoose = require('mongoose');

const connectToDatabase = async () => {
  try {
    await mongoose.connect(process.env.MONGODB_URL);
    console.log(`Connected to the database `);
  } catch (error) {
    console.error("Error connecting to the database:", error.message);
    process.exit(1);
  }
};

module.exports = connectToDatabase;
