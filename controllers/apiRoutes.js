const router = require("express").Router();
const { User } = require("../models/User");

router.get("/api/passwords", (req, res) => {
  return res.json(db);
});

router.get("/api/passwords/:id", (req, res) => {
  for (let i = 0; i < db.length; i++) {
    if (db[i].id == req.params.id) {
      return res.json(db[i]);
    }
  }
});

router.post("/api/passwords", (req, res) => {
  req.body.id = db.length + 1;
  db.push(req.body);
  fs.writeFile("./db/db.json", JSON.stringify(db), function () {
    console.log("Added to file");
  });
  res.json(db);
});

router.post("/api/passwords:id", (req, res) => {
  req.body.id = db.length + 1;
  db.push(req.body);
  fs.writeFile("./db/db.json", JSON.stringify(db), function () {
    console.log("Added to file");
  });
  res.json(db);
});

router.delete("/api/passwords/:id", (req, res) => {
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

// GET /api/users
router.get("/", (req, res) => {});

// GET /api/users/1
router.get("/:id", (req, res) => {});

// POST /api/users
router.post("/", (req, res) => {});

// PUT /api/users/1
router.put("/:id", (req, res) => {});

// DELETE /api/users/1
router.delete("/:id", (req, res) => {});

module.exports = router;
