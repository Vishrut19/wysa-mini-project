const mongoose = require("mongoose");

const questionsSchema = mongoose.Schema({
  id: Number,
  question: String,
  options: Object,
});

module.exports = mongoose.model("Questions", questionsSchema);
