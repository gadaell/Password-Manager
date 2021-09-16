const router = require("express").Router();

router.get("/", (req, res) => {
	try {
		const fakeUser = {
			website: "google.com",
			websiteUserName: "Name",
			websiteEmail: "email@email.com",
			websitePassword: "password",
		};
		res.render("signup");
	} catch (err) {
		console.log(err);
	}
});

module.exports = router;
