const express = require("express");
const app = express();

require("dotenv").config();

// Set EJS template engine
const path = require("node:path");
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

// Routers
const indexRouter = require("./routes/indexRouter");
const messageRouter = require("./routes/messageRouter");

// Parse form data
app.use(express.urlencoded({ extended: true }));

app.use("/", indexRouter);
app.use("/new", messageRouter);

app.listen(process.env.PORT, () =>
  console.log(
    `Server running at http://${process.env.HOSTNAME}:${process.env.PORT}`
  )
);
