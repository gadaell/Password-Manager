const router = require("express").Router();
const path = require("path");


router.get("/dashboard", (req, res) => {
    res.sendFile(path.join(__dirname, "../../dashboard.html"));
  });

  router.get("/password:id", (req, res) => {
    res.sendFile(path.join(__dirname, "../../password.html"));
  });

  router.get("/signup", (req, res) => {
    res.sendFile(path.join(__dirname, "../../signup.html"));
  });

router.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "../../index.html"));
  });
  
  module.exports = router;