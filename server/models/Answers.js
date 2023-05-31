const mongoose = require("mongoose");

const answerSchema = mongoose.Schema({
  user: String,
  answer: String,
});

module.exports = mongoose.model("Answers", answerSchema);
