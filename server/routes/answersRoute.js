const express = require("express");
const router = express.Router();
const Answers = require("../models/Answers");

// GET ALL ANSWERS
// router.get("/", async (req, res) => {
//   try {
//     const answers = await Answers.find();
//     res.json(answers);
//   } catch (error) {
//     res.json({ message: error });
//   }
// });

// SUBMIT AN ANSWER
router.post("/submit", async (req, res) => {
  try {
    const { user, answer } = req.body;
    const createdAnswers = await Answers.create({ user, answer });
    res.json(createdAnswers);
  } catch (error) {
    res.json({ message: error });
  }
});

module.exports = router;
