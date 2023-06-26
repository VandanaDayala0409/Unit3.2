var mongoose = require("mongoose");

var playersSchema = new mongoose.Schema({
  NameofPlayer: {
    type: String,
  },
  Batting: {
    type: String,
  },
  Bowling: {
    type: String,
  },
  HS: {
    type: Number,
  },
  Avg: {
    type: Number,
  },
  created_at: {
    type: Date,
    default: Date.now,
  },
  updated_at: {
    type: Date,
    default: Date.now,
  },
});

const Players = mongoose.model("Players", playersSchema);
module.exports = Players;
