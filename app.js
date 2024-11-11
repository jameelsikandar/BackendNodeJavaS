const express = require("express");
const mongoose = require("mongoose");
const app = express();

// database connection
const dbURI =
  "mongodb+srv://jameelsikandarr:open123khanop@cluster0.p1e8d.mongodb.net/JWT-Auth?retryWrites=true&w=majority&appName=Cluster0";

// middleware
app.use(express.static("public"));

// view engine
app.set("view engine", "ejs");

mongoose
  .connect(dbURI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then((result) => app.listen(3000))
  .catch((err) => console.log(err));

// routes
app.get("/", (req, res) => res.render("home"));
app.get("/smoothies", (req, res) => res.render("smoothies"));
