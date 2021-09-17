const router = require("express").Router();
const Passwords = require("../models/Passwords");

router.get("/passwords", (req, res) => {
	console.log('get all passwords');
});

router.get("/passwords/:id", (req, res) => {
console.log('get by id');
});

router.post("/passwords", (req, res) => {
console.log('post one');
});

router.post("/passwords:id", (req, res) => {
console.log('update one');
});

router.delete("/passwords/:id", (req, res) => {
console.log('delete');
});


module.exports = router;
