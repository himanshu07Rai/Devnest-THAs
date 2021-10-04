const check = (req, res, next) => {
  if (req.user.role === "super-admin") {
    next();
  } else {
    res.status(401).send("Needs to be super admin");
  }
};

module.exports = check;
