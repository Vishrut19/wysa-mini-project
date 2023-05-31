const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const cors = require("cors");
require("dotenv/config");

const app = express();

// Import Routes
const questionsRoute = require("./routes/questionsRoute");
const answersRoute = require("./routes/answersRoute");

// Middlewares
app.use(bodyParser.json());
app.use(cors());
app.use("/Questions", questionsRoute);
app.use("/Answers", answersRoute);

// Routes
// app.get("/home", (req, res) => {
//   res.send("We are on homepage");
// });

// Connect To DB
mongoose.connect(process.env.DATABASE_URL).then(() => {
  console.log("Connected to DB");
});

// Listening
const PORT = 4000;
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost/${PORT} 🚀🚀🚀`);
});
