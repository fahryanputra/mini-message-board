const { Router } = require("express");

const indexRouter = Router();

indexRouter.get("/", (req, res) => res.send("New message route"));

module.exports = indexRouter;
