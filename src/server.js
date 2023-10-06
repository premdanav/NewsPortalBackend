require("dotenv").config();
const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");

const app = express();

app.use(express.json());
app.use(cors());

// Database connection setup
mongoose.connect(process.env.MONGODB_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  //  useCreateIndex: true,
  //useFindAndModify: false,
});

const db = mongoose.connection;
db.on("error", console.error.bind(console, "MongoDB connection error:"));
db.once("open", () => {
  console.log("Connected to MongoDB");
});

// Import and use routes
const authRouter = require("./routes/auth.routes");
const categoryRouter = require("./routes/category.routes");
const bookmarkRouter = require("./routes/bookmark.routes");
const newsRouter = require("./routes/news.routes");

app.use("/authentication", authRouter);
app.use("/category", categoryRouter);
app.use("/bookmark", bookmarkRouter);
app.use("/news", newsRouter);

const PORT = process.env.PORT || 8000;

app.listen(PORT, () => {
  console.log(`Server started in ${process.env.NODE_ENV} mode at port ${PORT}`);
});
