const router = require('express').Router();
const { Player, Class, Weapon, Armor, Spell } = require('../../models');
const sequelize = require('../../config/connection');
const chalk = require('chalk');

router.get('/', async (req, res) => {
  try {
    const playerData = await Player.findAll({
      where: {
        user_id: req.session.user_id
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
    res.render('player', { players, loggedIn: true });
  
  } catch (err) {   
    console.log(err);
    res.status(500).json(err);
  }
});

router.get('/:id', async (req, res) => {
  try {
    const singlePlayerData = await Player.findByPk(req.params.id, {
      include: [
          {model: Weapon}, 
          {model: Armor}, 
          {model: Spell}, 
          {model: Class}
      ]
    });

    if (!singlePlayerData) {
      res.status(404).json({ message: 'No player found with this id' });
      return;
    }
  
    const player = singlePlayerData.get({plain: true});
    const spells = player.spells;
  
    res.render('player', {player, spells, loggedIn: req.session.loggedIn});
   
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

router.post('/', async (req, res)=> {
  try {
    const playerCreateData = await Player.create({
      name: req.body.name,
      level: req.body.level,
      base_hp: req.body.base_hp,
      base_mana: req.body.base_mana,
      base_atk: req.body.base_atk,
      base_def: req.body.base_def,
      class_id: req.body.class_id,
      user_id: req.session.user_id,
    });

    res.json(playerCreateData);
        
  } catch (err) {
    console.log(err);
    res.status(500).json(err);  
  }
});

router.put('/art', async (req, res) => {
  try {
    console.log(chalk.blue.bold('IM HIT ARGGGGGGGGG'))
    const playerToUpdate = await Player.update(
      {
        art: req.body.art,
      },
      {
        where: {
          id: req.body.player_id
        }
      }
    );

    res.status(200).json({ message: 'Player art updated.'})

  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
})

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