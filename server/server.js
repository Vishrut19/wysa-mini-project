const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const cors = require("cors");
const passport = require("passport");
const LocalStrategy = require("passport-local");
const bcrypt = require("bcrypt");
const session = require("express-session");
const User = require("./models/User");
const Answers = require("./models/Answers");
const Questions = require("./models/Questions");
require("dotenv/config");
// --------------------------- END OF ALL IMPORTS ---------------------------------
const app = express();

// Middlewares
app.use(bodyParser.json());
app.use(cors());
app.use(
  session({
    secret: "secret-key",
    resave: false,
    saveUninitialized: false,
  })
);
app.use(passport.initialize());
app.use(passport.session());

// Connect To DB
mongoose
  .connect(process.env.DATABASE_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("Connected to MongoDB");
  })
  .catch((error) => {
    console.error({ message: error });
  });

// Passport Configuration
passport.use(
  new LocalStrategy(
    { usernameField: "username" },
    async (username, password, done) => {
      try {
        const user = await User.findOne({ username });
        if (!user) {
          return done(null, false, { message: "Incorrect username" });
        }

        const isPasswordValid = await bcrypt.compare(password, user.password);
        if (!isPasswordValid) {
          return done(null, false, { message: "Incorrect password" });
        }

        return done(null, user);
      } catch (error) {
        return done(error);
      }
    }
  )
);

passport.serializeUser((user, done) => {
  done(null, user._id);
});

passport.deserializeUser(async (id, done) => {
  try {
    const user = await User.findById(id);
    done(null, user);
  } catch (error) {
    done(error);
  }
});

// Signup route
app.post("/signup", async (req, res) => {
  try {
    const { username, password } = req.body;

    // Check if the username is already taken
    const existingUser = await User.findOne({ username });
    if (existingUser) {
      return res.status(400).json({ message: "Username already exists" });
    }

    // Hash the password
    const hashedPassword = await bcrypt.hash(password, 10);

    // Create a new user
    const newUser = new User({ username, password: hashedPassword });
    await newUser.save();

    res.json({ message: "Signup successful" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Internal server error" });
  }
});

// Login route
app.post("/login", passport.authenticate("local"), (req, res) => {
  res.json({ message: "Login successful" });
});

// Protected routes
const isAuthenticated = (req, res, next) => {
  if (req.isAuthenticated()) {
    return next();
  }
  res.status(401).json({ message: "Unauthorized" });
};

// Route to retrieve the username
app.get("/username", isAuthenticated, (req, res) => {
  try {
    const username = req.user.username;
    res.json({ message: username });
  } catch (error) {
    res.json({ error: `User Not Found ${error}` });
  }
});

// Logout
app.get("/logout", isAuthenticated, (req, res) => {
  req.logOut(function (err) {
    if (err) {
      console.error("Error during logout:", err);
      res.status(500).json({ message: "Internal server error" });
    } else {
      res.json({ message: "Logout successful" });
    }
  });
});

// Endpoint to POST answers
app.post("/submit", isAuthenticated, async (req, res) => {
  try {
    const { user, answer } = req.body;
    const createdAnswers = await Answers.create({ user, answer });
    res.json(createdAnswers);
  } catch (error) {
    res.json({ message: error });
  }
});

// Endpoint to GET question using id
app.get("/:questionId", async (req, res) => {
  try {
    const question = await Questions.findById(req.params.questionId);
    res.json(question);
  } catch (error) {
    res.json({ message: error });
  }
});

// Endpoint to GET questions
app.get("/questions", isAuthenticated, async (req, res) => {
  try {
    const questions = await Questions.find();
    res.json(questions);
  } catch (error) {
    res.json({ message: error });
  }
});

// Listening
const PORT = 4000;
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost/${PORT} 🚀🚀🚀`);
});
