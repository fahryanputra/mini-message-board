const express = require("express");
const app = express();

app.get("/", (req, res) => res.send("Hello, world!"));

const HOSTNAME = "127.0.0.1";
const PORT = 3000;
app.listen(PORT, () =>
  console.log(`Starting server at http://${HOSTNAME}:${PORT}`)
);
