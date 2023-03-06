const express = require("express");
const { chats } = require("./Data/data");
const dotenv = require("dotenv").config();


let app = express();

app.listen(
  process.env.PORT,
  console.log(`listening to port ${process.env.PORT}`)
);

app.get("/", (req, res) => {
  res.send("Hello ji");
});

app.get("/chats", (req, res) => {
  res.send(chats);
});

app.get("/chats/:id", (req, res) => {
  let obj = chats.find((element) => element._id === req.params.id);
  res.send(obj);
});
