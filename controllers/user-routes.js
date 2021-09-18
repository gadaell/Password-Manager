const router = require("express").Router();
const User = require("../models/User");

// get all users
router.get("/", (req, res) => {
	User.findAll({
		attributes: { exclude: ["password"] },
	})
		.then((dbUserData) => res.json(dbUserData))
		.catch((err) => {
			console.log(err);
			res.status(500).json(err);
		});
});

router.get("/:id", (req, res) => {
	User.findOne({
		attributes: { exclude: ["password"] },
		where: {
			id: req.params.id,
		},
	})
		.then((dbUserData) => {
			if (!dbUserData) {
				res.status(404).json({ message: "No user found with this id" });
				return;
			}
			res.json(dbUserData);
		})
		.catch((err) => {
			console.log(err);
			res.status(500).json(err);
		});
});

// Create a new User
router.post("/", (req, res) => {
	console.log(req.body);
	User.create({
		user_name: req.body.user_name,
		email_address: req.body.email,
		password: req.body.password,
	})
		.then((dbUserData) => res.redirect("/"))
		.catch((err) => {
			console.log(err);
			res.status(500).json(err);
		});
});

router.post("/login", (req, res) => {
	// expects {email: 'lernantino@gmail.com', password: 'password1234'}
	User.findOne({
		where: {
			user_name: req.body.user_name,
		},
	})
		.then((dbUserData) => {
			if (!dbUserData) {
				res.status(400).redirect("/signup");
				return;
			}

			const validPassword = dbUserData.checkPassword(req.body.password);

			if (!validPassword) {
				res.status(400).json({ message: "Incorrect password!" });
				return;
			}

			req.session.save(() => {
				req.session.user_id = dbUserData.id;
				req.session.user_name = dbUserData.user_name;
				req.session.loggedIn = true;

				res.redirect("/dashboard");
			});
		})
		.then(function (err) {
			console.log(err);
		});
});

router.put("/:id", (req, res) => {
	// expects {username: 'Lernantino', email: 'lernantino@gmail.com', password: 'password1234'}

	// pass in req.body instead to only update what's passed through
	User.update(req.body, {
		individualHooks: true,
		where: {
			id: req.params.id,
		},
	})
		.then((dbUserData) => {
			if (!dbUserData[0]) {
				res.status(404).json({ message: "No user found with this id" });
				return;
			}
			res.json(dbUserData);
		})
		.catch((err) => {
			console.log(err);
			res.status(500).json(err);
		});
});

router.delete("/:id", (req, res) => {
	User.destroy({
		where: {
			id: req.params.id,
		},
	})
		.then((dbUserData) => {
			if (!dbUserData) {
				res.status(404).json({ message: "No user found with this id" });
				return;
			}
			res.json(dbUserData);
		})
		.catch((err) => {
			console.log(err);
			res.status(500).json(err);
		});
});

module.exports = router;
