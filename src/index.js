const path = require("node:path");
const express = require("express");
const morgan = require("morgan");
const { engine } = require("express-handlebars");

const app = express();

app.engine(".hbs", engine({ extname: ".hbs" }));
app.set("view engine", ".hbs");
app.set("views", path.join(__dirname, "/resouces/views"));

const port = 3000;

app.use(morgan("combined"));

app.get("/", (req, res) => {
  res.render("home");
});
app.get("/news", (req, res) => {
  res.render("news");
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
