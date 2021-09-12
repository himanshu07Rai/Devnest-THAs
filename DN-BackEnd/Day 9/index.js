const express = require("express");
var morgan = require("morgan");
const path = require("path");
const axios = require("axios");
const app = express();

app.use(morgan("dev"));
app.use(express.json());

console.log(__dirname);

app.set("views", path.join(__dirname, "views"));
app.set("view engine", "jade");

app.get("/", async (req, res) => {
  // res.sendFile(path.join(__dirname, "public/index.html"));

  // res.download(path.join(__dirname, "public/test.json"));

  // const d = await axios.get("https://api.chucknorris.io/jokes/random");

  // res.render("index", {
  //   title: "Express",
  //   joke: d.data.value,
  // });

  res
    .status(201)
    .cookie("token", "test", {
      expires: new Date(Date.now() + 10000),
    })
    .cookie("hello", "hello")
    .redirect(301, "/admin");
});

app.listen(5000, () => {
  console.log("listeninng on 5000");
});
