const router = require('express').Router();
const userRoutes = require('./userRoutes');
const playerRoutes = require('./playerRoutes');
const classRoutes = require('./classRoutes');

router.use('/users', userRoutes);
router.use('/player', playerRoutes);
router.use('/class', classRoutes);

module.exports = router;
