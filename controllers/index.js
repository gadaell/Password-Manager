const router = require('express').Router();

const apiRoutes = require("./apiRoutes");
const htmlRoutes = require("./htmlRoutes");
const userRoutes = require("./user-routes");

router.use('/', userRoutes);
router.use('/', htmlRoutes);
router.use('/', apiRoutes);

module.exports = router;