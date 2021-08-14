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

// Find only user created characters
router.get('/dashboard', async (req, res) => {
    try {
        const dbPlayerData = await Player.findAll({
            where: {user_id: req.session.user_id},
            include: [{model: Class}]
        });
        console.log('I AM THE PLAYER DATA', dbPlayerData)
        
        if(!dbPlayerData) {
            res.redirect('/create');
        }

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

router.get('/create', async (req,res) => {
    try {
        const dbClassData = await Class.findAll();

        const classes = dbClassData.map(entry => entry.get({plain:true}));

        res.render('newplayer', {classes, loggedIn: req.session.loggedIn});
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