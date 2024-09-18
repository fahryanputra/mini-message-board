const { Router } = require("express");
const messages = require("../data/messages");

const indexRouter = Router();

indexRouter.get("/", (req, res) => {
  res.render("index", { title: "Mini Messageboard", messages: messages });
});

// Display message route
indexRouter.get("/message/:messageId", (req, res) => {
  res.render("message", {
    message: messages.find(
      (message) => message.id === parseInt(req.params.messageId)
    ),
  });
});

module.exports = indexRouter;
