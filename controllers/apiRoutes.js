const router = require("express").Router();
const { User } = require("../models/User");

router.get("/passwords", (req, res) => {
	return res.json(db);
});

router.get("/passwords/:id", (req, res) => {
	for (let i = 0; i < db.length; i++) {
		if (db[i].id == req.params.id) {
			return res.json(db[i]);
		}
	}
});

router.post("/passwords", (req, res) => {
	req.body.id = db.length + 1;
	db.push(req.body);
	fs.writeFile("./db/db.json", JSON.stringify(db), function () {
		console.log("Added to file");
	});
	res.json(db);
});

router.post("/passwords:id", (req, res) => {
	req.body.id = db.length + 1;
	db.push(req.body);
	fs.writeFile("./db/db.json", JSON.stringify(db), function () {
		console.log("Added to file");
	});
	res.json(db);
});

router.delete("/passwords/:id", (req, res) => {
	const newArray = db;
	for (let i = 0; i < newArray.length; i++) {
		if (newArray[i].id == req.params.id) {
			newArray.splice(i, 1);
		}
	}
	fs.writeFile("./db/db.json", JSON.stringify(newArray), function () {
		console.log("Removed from file");
	});
	res.json(newArray);
});

// GET /users
router.get("/", (req, res) => {});

// GET /users/1
router.get("/:id", (req, res) => {});

// POST /users
router.post("/", (req, res) => {});

// PUT /users/1
router.put("/:id", (req, res) => {});

// DELETE /users/1
router.delete("/:id", (req, res) => {});

module.exports = router;
