const express = require("express");
const mongoose = require("mongoose");

const app = express();
const PORT = process.env.PORT || 5000;
const MONGODB_URI =
  process.env.MONGODB_URI ||
  "mongodb+srv://root:root@cluster0.sz3aw.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";

app.use(express.json());

app.get("/", (req, res) => {
  res.send("Hello World");
});

mongoose
  .connect(MONGODB_URI, { useNewUrlParser: true })
  .then(() => {
    app.listen(PORT, console.log("Server stated on port 5000"));
  })
  .catch((err) => {
    console.log(err);
  });
