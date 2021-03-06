const express = require("express");
const app = express();
const mongoose = require("mongoose");
const port = process.env.PORT || 3002;
require("dotenv").config();
const cors = require("cors");
const PokemonHighScoresRouter = require("./routes/pokemonHighScores");
const authRouter = require("./routes/authRouter");
const userRouter = require("./routes/userRouter");

mongoose.connect(process.env.MONGO_DB, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(PokemonHighScoresRouter);
app.use("/users", authRouter);
app.use("/", userRouter);

app.listen(port, console.log(`Connected to port ${port}`));
