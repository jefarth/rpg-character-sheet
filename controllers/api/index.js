const router = require('express').Router();
const userRoutes = require('./userRoutes');
const playerRoutes = require('./playerRoutes');
const classRoutes = require('./classRoutes');
const weaponRoutes = require('./weaponRoutes');
const armorRoutes = require('./armorRoutes');

router.use('/users', userRoutes);
router.use('/player', playerRoutes);
router.use('/class', classRoutes);
router.use('/weapons', weaponRoutes);
router.use('/armor', armorRoutes);

module.exports = router;
