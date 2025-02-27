const express = require("express");
const dotenv = require("dotenv");
const connectDB = require("./config/db");
const cors = require("cors");
const mongoose = require("mongoose");
const authRoutes = require("./routes/authRoutes");

dotenv.config();
connectDB();

const app = express();
app.use(express.json());
app.use(cors());

app.use("/api/auth", require("./routes/authRoutes"));

const PORT = process.env.PORT || 5000;
app.listen(PORT, () =>
  console.log(`Server running on  http://localhost:${PORT}`)
);
