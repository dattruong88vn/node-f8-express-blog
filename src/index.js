const path = require("node:path");
const express = require("express");
// const morgan = require("morgan");
const { engine } = require("express-handlebars");
const methodOverride = require("method-override");

const route = require("./routes");
const db = require("./config/db");

// connect to DB
db.connect();

const app = express();
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
// static
app.use(express.static(path.join(__dirname, "public")));

// override method
app.use(methodOverride("_method"));

// logger
// app.use(morgan("combined"));

// engine template
app.engine(
  ".hbs",
  engine({
    extname: ".hbs",
    helpers: {
      sum: (a, b) => a + b,
    },
  })
);
app.set("view engine", ".hbs");
app.set("views", path.join(__dirname, "resouces", "views"));

const port = 3000;

// route
route(app);

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
