const express = require("express");
var morgan = require("morgan");

app = express();

app.use(morgan("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
// app.use(express.static("public"));

app.get("/", (req, res) => {
  res.send("oK");
});

app.post("/", async (req, res, next) => {
  console.log(req.body);
  res.json(req.body);
});

app.get("/user/:id", (req, res) => {
  res.send(req.params);
});

app.get("/feed?limit=20", (req, res) => {
  res.send(req.query);
});

app.listen(5000, () => {
  console.log("listeninng on 5000");
});
