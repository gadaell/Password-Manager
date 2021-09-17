const router = require("express").Router();

const apiRoutes = require("./apiRoutes");
const htmlRoutes = require("./htmlRoutes");
const userRoutes = require("./user-routes");

router.use("/user", userRoutes);
router.use("/", htmlRoutes);
router.use("/api", apiRoutes);

module.exports = router;
