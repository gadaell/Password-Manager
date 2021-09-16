const router = require("express").Router();
const path = require("path");


router.get("/passwords", (req, res) => {
    res.sendFile(path.join(__dirname, "../../index.html"));
  });

  router.get("/password:id", (req, res) => {
    res.sendFile(path.join(__dirname, "../../index.html"));
  });

  router.get("/register", (req, res) => {
    res.sendFile(path.join(__dirname, "../../index.html"));
  });

router.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "../../index.html"));
  });
  
  module.exports = router;