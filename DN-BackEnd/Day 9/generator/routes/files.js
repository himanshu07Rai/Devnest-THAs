var express = require("express");
var router = express.Router();
const path = require("path");
router.get("/:n", function (req, res, next) {
  //   console.log(req.params);
  res.sendFile(path.join(__dirname, "..", "public", "images", req.params.n));
});

module.exports = router;
