var express = require("express");
const check = require("../middlewares/checkSuperAdmin");
var router = express.Router();

/* GET home page. */
router.get("/", function (req, res, next) {
  res.render("index", { title: "Express" });
});

router.get("/super", check, function (req, res, next) {
  res.render("index", { title: "Super user" });
});

module.exports = router;
