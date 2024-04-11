const mongoose = require("mongoose");

const connectDB = async () => {
  try {
    await mongoose.connect("mongodb://db:27017/pokeDB");
    console.log("Connected to the database");
  } catch (error) {
    console.log(error);
  }
};

const disconnectDB = async () => {
  try {
    await mongoose.disconnect();
    console.log("Disconnected to the database");
  } catch (error) {
    console.log(error);
  }
};

module.exports = { connectDB, disconnectDB };
