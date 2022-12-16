// app.js

// Import modules
require("dotenv").config();

const path = require("path");
const express = require("express");
const exphbs = require("express-handlebars");
const hbs = require("handlebars");

// Handlebars helpers
hbs.registerHelper("ifEquals", function (arg1, arg2, options) {
  return arg1 == arg2 ? options.fn(this) : options.inverse(this);
});

// Import routes
const indexRouter = require("./routes/index");

// Create an express app
const app = express();
const port = process.env.PORT || 3000;

// Path to serve static files
const staticPath = path.join(__dirname, "public");

// view engine setup
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "hbs");
app.engine(
  "hbs",
  exphbs.engine({
    extname: "hbs",
    defaultLayout: "layout",
    layoutsDir: path.join(__dirname, "views/layouts"),
    partialsDir: path.join(__dirname, "views/partials"),
  })
);

// Middlewares
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// Middleware to serve static files
app.use("/", express.static(staticPath));

// Middleware routes
app.use("/", indexRouter);

// Routes
app.get("/", (req, res) => {
  res.send("Welcome to home");
});

app.get("*", (req, res) => {
  const err = new Error("Not Found!");
  res.render("error", {
    title: "Error",
    message: err.message,
    error: {
      status: 404,
      stack: err.stack,
    },
  });
});

// Listening to the server
app.listen(port, () => {
  console.log(`\nServer is running on the port: ${port}`);
  console.log(`Homepage: http://localhost:${port}\n`);
});
