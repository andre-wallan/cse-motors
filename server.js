// app.js
const express = require("express");
const app = express();

// Set EJS as the view engine
app.set("view engine", "ejs");

// Tell Express where your views folder is
app.set("views", __dirname + "/views");

// Serve static files from 'public' folder
app.use(express.static("public"));

// Example route
app.get("/", (req, res) => {
  res.render("index", { title: "Welcome to CSE Motors" });
});

module.exports = app;
