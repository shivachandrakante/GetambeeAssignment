const dotenv = require("dotenv");
dotenv.config({ path: "./config.env" });
const mongoose = require("mongoose");
const express = require("express");
const fs = require("fs");
const path = require("path");
// import express from "express";
// import bodyParser from "body-parser";
// import mongoose from "mongoose";
const cors = require("cors");
const postRoutes = require("./routes/post");
const app = express();

app.use(express.json());
app.use(cors());
app.use("/post", postRoutes);
const PORT = process.env.PORT;
const DB = process.env.DATABASE.replace(
  "<PASSWORD>",
  process.env.DATABASE_PASSWORD
);
mongoose
  .connect(DB, {
    useNewUrlParser: true,
  })
  .then(() => {
    console.log("Connection Successful");
    app.listen(PORT, () => console.log(`Server Running on ${PORT}`));
  })
  .catch((err) => console.log(err));
