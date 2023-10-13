const path = require("node:path");
const express = require("express");
// const morgan = require("morgan");
const { engine } = require("express-handlebars");

const app = express();

// static
app.use(express.static(path.join(__dirname, "public")));

// logger
// app.use(morgan("combined"));

// engine template
app.engine(".hbs", engine({ extname: ".hbs" }));
app.set("view engine", ".hbs");
app.set("views", path.join(__dirname, "/resouces/views"));

const port = 3000;

app.get("/", (req, res) => {
  res.render("home");
});
app.get("/news", (req, res) => {
  res.render("news");
});

app.get("/search", (req, res) => {
  console.log(req.query);
  res.render("search");
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
