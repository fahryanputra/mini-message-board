const { Router } = require("express");
const messages = require("../data/messages");

const messageRouter = Router();

messageRouter.get("/", (req, res) => res.render("form"));
messageRouter.post("/", (req, res) => {
  const { userText, messageText } = req.body;
  messages.push({ text: messageText, user: userText, added: new Date() });
  res.redirect("/");
});

module.exports = messageRouter;
