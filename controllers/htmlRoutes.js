const router = require("express").Router();
const path = require("path");

router.get("/dashboard", (req, res) => {
	console.log(req.session);
	if (req.session.loggedIn) {
		res.render("dashboard");
	} else {
		res.redirect("/");
	}
});

router.get("/password:id", (req, res) => {
	res.sendFile(path.join(__dirname, "../../password.html"));
});

router.get("/signup", (req, res) => {
	res.render("signup");
});

router.get("/", (req, res) => {
	res.render("login");
});

module.exports = router;
