const router = require('express').Router();

const userRoutes = require('./user-routes.js');
const htmlRoutes = require('./htmlRoutes');
const apiRoutes = require('./apiRoutes');

router.use('/users', userRoutes);
router.use('/html', htmlRoutes);
router.use('/api', apiRoutes);

module.exports = router;