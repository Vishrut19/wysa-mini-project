const express = require("express");
const router = express.Router();
const Questions = require("../models/Questions");

// GET ALL THE QUESTIONS
// router.get("/", async (req, res) => {
//   try {
//     const questions = await Questions.find();
//     res.json(questions);
//   } catch (error) {
//     res.json({ message: error });
//   }
// });

// SUBMITS A QUESTION
// router.post("/", async (req, res) => {
//   const question = new Questions({
//     id: req.body.id,
//     question: req.body.question,
//     options: req.body.options,
//   });
//   try {
//     const savedQuestion = await question.save();
//     res.json(savedQuestion);
//   } catch (error) {
//     res.json({ message: error });
//   }
// });

// SPECIFIC QUESTIONS
router.get("/:questionId", async (req, res) => {
  try {
    const question = await Questions.findById(req.params.questionId);
    res.json(question);
  } catch (error) {
    res.json({ message: error });
  }
});

module.exports = router;
