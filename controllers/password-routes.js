const router = require("express").Router();
const Passwords = require("../models/Passwords");

router.get("/passwords", (req, res) => {
  console.log("get all passwords");
});

router.get("/passwords/:id", (req, res) => {
  console.log("get by id");
});

router.post("/passwords", (req, res) => {
  console.log("post one");
  console.log(req.body);
  Passwords.create({
    userID: "1",
    website: req.body.addsite,
    websiteUsername: req.body.addusername,
    websitePassword: req.body.addpass,
  })
    .then((dbPassData) => res.render("dashboard"))
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
});

router.post("/passwords:id", (req, res) => {
  console.log("update one");
});

router.delete("/passwords/:id", (req, res) => {
  console.log("delete");
});

module.exports = router;
