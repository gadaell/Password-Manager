// const router = require("express").Router();
// const sequelize = require("../config/connection");
// // const User = require("../models/User");
// const Passwords = require("../models/Passwords");

// // const Website = require("../models/Website");

// router.get("/api/passwords", (req, res) => {
//   Passwords.findAll().then((dbPasswords) => {
//     res.json(dbPasswords);
//   });
// });

// router.post("/api/password", (req, res) => {
//   Passwords.create({
//     website: req.body.website,
//     username: req.body.website_username,
//     password: req.body.website_password,
//   }).then((dbPasswords) => {
//     res.render("dashboard");
//   });
// });

// router.get("/api/passwords", (req, res) => {
//   Passwords.findAll({
//     where: {
//       // use the ID from the session
//       id: req.params.id,
//     },
//     attributes: ["id", "user_id", "website", "website_password"],
//   })
//     .then((dbPostData) => {
//       // serialize data before passing to template
//       const posts = dbPostData.map((post) => post.get({ plain: true }));
//       res.render("dashboard", { posts, loggedIn: true });
//     })
//     .catch((err) => {
//       console.log(err);
//       res.status(500).json(err);
//     });
// });
// module.exports = router;
