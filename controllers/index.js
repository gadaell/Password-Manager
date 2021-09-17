const router = require("express").Router();

const apiRoutes = require("./password-routes");
const htmlRoutes = require("./htmlRoutes");
const userRoutes = require("./user-routes");

router.use("/user", userRoutes);
router.use("/", htmlRoutes);
router.use("/api", apiRoutes);

module.exports = router;
