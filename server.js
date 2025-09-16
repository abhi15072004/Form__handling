import express from "express";
import mongoose from "mongoose";
import { userRegister } from "./controllers/user.js";

const app = express();

// Middleware
app.use(express.urlencoded({ extended: true }));

// Set EJS as template engine
app.set("view engine", "ejs");

// Connect to MongoDB
mongoose
  .connect(
    "mongodb+srv://at411413_db_user:KbKDTA6PKjhPiTGY@nodejsmastery.hjcatyk.mongodb.net/",
    { dbName: "NodeJs_Mastery_Course" }
  )
  .then(() => console.log("✅ MongoDb Connected..!"))
  .catch((err) => console.error("❌ MongoDB Connection Error:", err));

// Routes
app.get("/", (req, res) => {
  res.render("index"); // looks for views/index.ejs
});

app.post("/form-submit", userRegister);

// Start server
const port = 1000;
app.listen(port, () => console.log(`🚀 Server is running on http://localhost:${port}`));
