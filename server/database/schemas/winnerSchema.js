const mongoose = require("mongoose");
const { Schema, model } = mongoose;

const winnerSchema = new Schema({
  user: String,
  time: Number,
  moves: Number,
});

const winnerUser = model("winnerUser", winnerSchema);

module.exports = winnerUser;
