const router = require("express").Router();
const path = require("path");
const Passwords = require("../models/Passwords");

router.get("/dashboard", (req, res) => {
	if (req.session.loggedIn) {
	
		const data = {
			session: req.session,
			posts: allUserPosts,
		};

		res.render("dashboard", data);
	} else {
		res.redirect("/");
	}
});

router.get("/password:id", (req, res) => {
	res.sendFile(path.join(__dirname, "../../password.html"));
});

router.get("/signup", (req, res) => {
	req.session.loggedIn = false;
	res.render("signup");
});

router.get("/", (req, res) => {
	req.session.loggedIn = false;
	res.render("login");
});

module.exports = router;
