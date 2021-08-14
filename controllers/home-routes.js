const router = require('express').Router();
const { Player, Class, Weapon, Armor, Spell } = require('../models');

router.get('/', async (req, res) => {
    try {
        const dbPlayerData = await Player.findAll({
            include: [{model: Class}]
        });

        const players = dbPlayerData.map((player) =>
            player.get({ plain: true})
        );

        res.render('homepage', {
            players,
            loggedIn: req.session.loggedIn,
        });
    } catch (err) {
        console.log(err);
        res.status(500).json(err);
    }
});

// Get all players the user created
router.get('/players-page/:id', async (req,res) => {
    try {
        const dbPlayerData = await Player.findByPk(req.params.id, {
            include: [
                {model: Weapon}, 
                {model: Armor}, 
                {model: Spell}, 
                {model: Class}
            ]
        });
        
        const player = dbPlayerData.get({plain: true});
        const spells = player.spells;

        res.render('player', {player, spells, loggedIn: req.session.loggedIn});
        // res.json(player)
    } catch (err) {
        console.log(err);
        res.status(500).json(err);
    }
});

// Gets all weapons
router.get('/weapons-page/:id', async (req,res) => {
    try {
        const dbWeaponData = await Weapon.findAll({
            include: [
                {
                    model: Weapon,
                    attributes: ['id', 'name', 'bonus_atk', 'lvl_req'],
                },
            ],
        });

        const weapons = dbWeaponData.get({plain: true});

        res.render('weapons-page', {weapons, loggedIn: req.session.loggedIn});
    } catch (err) {
        console.log(err);
        res.status(500).json(err);   
    }
});

router.get('/armor-page/:id', async (req,res) => {
    try {
        const dbArmorData = await Armor.findAll({
            include: [
                {
                    model: Armor,
                    attributes: ['id', 'name', 'bonus_def', 'lvl_req'],
                },
            ],
        });

        const armor= dbArmorData.get({plain: true});

        res.render('armor-page', {armor, loggedIn: req.session.loggedIn});
    } catch (err) {
        console.log(err);
        res.status(500).json(err);
    }
});

router.get('/class-page/:id', async (req,res) => {
    try {
        const dbClassData = await Class.findAll();

        const classes = dbClassData.get({plain: true});

        res.render('class-page', {classes, loggedIn: req.session.loggedIn});
    } catch (err) {
        console.log(err);
        res.status(500).json(err);
    }
});

router.get('/login', (req, res) => {
    if (req.session.loggedIn) {
      res.redirect('/');
      return;
    }
    res.render('login');
});

module.exports = router;