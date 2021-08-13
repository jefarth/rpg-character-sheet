const router = require('express').Router();
const { Player, Class, Weapon, Armor } = require('../../models');
const sequelize = require('../../config/connection');

router.get('/', async (req, res) => {
 
    try {
   
     const playerData = await Player.findAll({
        where: {
            id: req.session.id
          },
      attributes: [
        'id',
        'name',
        'level',
        'base_hp',
        'base_mana',
        'base_atk',
        'base_def',
        'class_id',
        'art',
        'created_at'
      ],
      order: [['created_at', 'DESC']],
      include: [
        {
          model: Class,
          attributes: ['title', 'bonus_hp', 'bonus_mana'],
        
        },
        {
            model: Weapon,
            attributes: ['name', 'bonus_atk', 'lvl_req']
        },
        {
          model: Armor,
          attributes: ['name', 'bonus_def', 'lvl_req']
        }   
      ]
    });
  
    const players = playerData.map(player => player.get({ plain: true }));
    res.render('playerPage', { players, loggedIn: true });
  
    
      
    } catch (err) {
      
      console.log(err);
      res.status(500).json(err);
  
    }
  });

  router.get('/:id', async (req, res) => {
 
    try {
   
     const singlePlayerData = await Player.findOne({
        where: {
        id: req.params.id
          },
      attributes: [
        'id',
        'name',
        'level',
        'base_hp',
        'base_mana',
        'base_atk',
        'base_def',
        'class_id',
        'art',
        'created_at'
      ],
      include: [
        {
          model: Class,
          attributes: ['title', 'bonus_hp', 'bonus_mana'],
        
        },
        {
            model: Weapon,
            attributes: ['name', 'bonus_atk', 'lvl_req']
        },
        {
          model: Armor,
          attributes: ['name', 'bonus_def', 'lvl_req']
        }   
      ]
    });
  
    if (!singlePlayerData) {
        res.status(404).json({ message: 'No player found with this id' });
        return;
      }

    res.json(singlePlayerData);
   
    } catch (err) {
      
      console.log(err);
      res.status(500).json(err);
  
    }
  });

  router.post('/', async (req, res)=> {

    try {

        const playerCreateData = await Player.create({
            id: req.body.id,
            name: req.body.name,
            level: req.session.level,
            base_hp: req.body.base_hp,
            base_mana: req.body.base_mana,
            base_atk: req.body.base_atk,
            base_def: req.body.base_def,
            class_id: req.body.class_id,
            art: req.body.art
          });

          res.json(playerCreateData);
        
    } catch (err) {

        console.log(err);
        res.status(500).json(err);
        
    }

  });

  router.put('/:id', async (req, res)=> {

    try {

        const playerUpdateData = await Player.update({
           
            name: req.body.name,
            level: req.session.level,
            base_hp: req.body.base_hp,
            base_mana: req.body.base_mana,
            base_atk: req.body.base_atk,
            base_def: req.body.base_def,
            class_id: req.body.class_id,
            art: req.body.art
            },
            {
                where: {
                    id: req.params.id
                  }
            });

            if(!playerUpdateData) {
                res.status(404).json({ message: 'No player found with this id' });
                return;
              }

          res.json(playerUpdateData);
        
    } catch (err) {

        console.log(err);
        res.status(500).json(err);
        
    }

  });

  router.delete('/:id', async (req, res)=> {

    try {

        const playerDeleteData = await Player.delete({
                where: {
                    id: req.params.id
                  }
            });

            if(!playerDeleteData) {
                res.status(404).json({ message: 'No player found with this id' });
                return;
              }

          res.json(playerDeleteData);
        
    } catch (err) {

        console.log(err);
        res.status(500).json(err);
        
    }

  });

  module.exports = router;
