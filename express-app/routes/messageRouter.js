const { Router } = require("express");
const messages = require("../data/messages");
const links = require("../data/links");

const messageRouter = Router();

// New message routes
messageRouter.get("/", (req, res) => res.render("form", { links: links }));
messageRouter.post("/", (req, res) => {
  const { userText, messageText } = req.body;
  messages.push({
    id: messages.length + 1,
    text: messageText,
    user: userText,
    added: new Date(),
  });
  res.redirect("/");
});

module.exports = messageRouter;
