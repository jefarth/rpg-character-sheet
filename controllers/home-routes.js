const router = require('express').Router();
const { User, Character, Class } = require('../models');
const authorizeMiddleware = require('../middlewares/authorizeMiddlewares');

router.get('/', authorizeMiddleware, async (req, res) => {

    try {

        const dbCharacterData = await User.findAll({

            include: [

                {
                model: Character,
                attributes: [ 'name', 'level', 'class_id'],
                },

            ],



        });

        const characters = dbCharacterData.map((character) =>

        character.get({ plain: true})
    
        );
        res.render('homepage', {

            characters,
            loggedIn: req.session.loggedIn,

        });

    } catch (err) {

        console.log(err);
        res.status(500).json(err);


    }

});

// Get all characters the user created
router.get('/characters-page/:id', authorizeMiddleware, async (req,res) => {

    try {

        const dbCharacterData = await User.findAll({

            include: [

                {

                    model: Character,
                    attributes: ['id', 'name', 'level', 'base_hp', 'base_mana', 'base_atk', 'base_def', 
                    'class_id', 'weapon_id', 'armor_id', 'spell_1', 'spell_2', 'spell_3', ],

                },

            ],

        });

        const characters = dbCharacterData.get({plain: true});
        res.render('characters-page', {characters, loggedIn: req.session.loggedIn});
        
    } catch (err) {

        console.log(err);
        res.status(500).json(err);
        
    }



});

router.get('/weapons-page/:id', authorizeMiddleware, async (req,res) => {

    try {

        const dbWeaponData = await Character.findAll({

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

router.get('/armor-page/:id', authorizeMiddleware, async (req,res) => {

    try {

        const dbArmorData = await Character.findAll({

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

router.get('/class-page/:id', authorizeMiddleware, async (req,res) => {

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