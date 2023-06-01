const mongoose = require("mongoose");

const answerSchema = mongoose.Schema({
  answer: String,
});

module.exports = mongoose.model("Answers", answerSchema);
