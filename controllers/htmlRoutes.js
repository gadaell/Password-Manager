const router = require("express").Router();
const path = require("path");
const Passwords = require("../models/Passwords");

router.get("/dashboard", (req, res) => {
	Passwords.findAll({
		where: {
			link: req.session.user_id,
		},
	})
		.then(function (passwordData) {
			const allPasswords = passwordData.map((password) =>
				password.get({ plain: true })
			);

			// console.log("allPasswords: ", allPasswords);
			const data = {
				session: req.session,
				posts: allPasswords,
				image: allPasswords.website,
			};

			res.render("dashboard", data);
		})
		.catch(function (err) {
			console.log(err);
		});
});
// const allUserPosts = {
//   id: 1,
//   link: 2,
//   website: "google.com",
//   website_username: "danielzk",
//   website_password:
//     "$2b$10$VOzpw3gyHM8wsGiNX9D7ze43XJ9NxqshuFIibOszvDmtP8tSz0WVu",
// };

//     res.render("dashboard", data);
//   } else {
//     res.redirect("/");
//   }

router.get("/password:id", (req, res) => {
	res.sendFile(path.join(__dirname, "../../password.html"));
});

router.get("/signup", (req, res) => {
	req.session.loggedIn = false;
	res.render("signup");
});

router.get("/", (req, res) => {
	req.session.destroy();
	res.render("login");
});

module.exports = router;
