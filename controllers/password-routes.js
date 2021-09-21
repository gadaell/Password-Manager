const router = require("express").Router();
const Passwords = require("../models/Passwords");

router.get("/passwords/user/:userid", (req, res) => {
  Passwords.findAll({
    where: {
      link: req.params.userid,
    },
  })
    .then((dbPassData) => {
      if (!dbPassData) {
        res
          .status(404)
          .json({ message: "No password data found for this user" });
        return;
      }
      res.json(dbPassData);
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
});

router.get("/passwords/:id", (req, res) => {
  Passwords.findOne({
    where: {
      id: req.params.id,
    },
  })
    .then((dbPassData) => {
      if (!dbPassData) {
        res
          .status(404)
          .json({ message: "No password data found with this id" });
        return;
      }
      res.json(dbPassData);
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
});

router.post("/passwords", (req, res) => {
  Passwords.create({
    link: req.session.user_id,
    website: req.body.website,
    website_username: req.body.website_username,
    website_password: req.body.website_password,
  })
    .then((dbPassData) => res.redirect("/dashboard"))
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
});

router.put("/passwords/:id", (req, res) => {
  Passwords.update(req.body, {
    individualHooks: true,
    where: {
      id: req.params.id,
    },
  })
    .then((dbPassData) => {
      if (!dbPassData[0]) {
        res.status(404).json({ message: "No password found with this id" });
        return;
      }
      res.json(dbPassData);
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
});

router.delete("/passwords/:id", (req, res) => {
  Passwords.destroy({
    where: {
      id: req.params.id,
    },
  })
    .then((dbPassData) => {
      if (!dbPassData) {
        res.status(404).json({ message: "No password found with this id" });
        return;
      }
      res.json(dbPassData);
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
});

module.exports = router;
