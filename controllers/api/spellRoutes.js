const router = require('express').Router();
const { Spell } = require('../../models');
const sequelize = require('../../config/connection');

router.get('/', async (req, res) => {
  try {
    const spellData = await Spell.findAll({
      where: {
        user_id: req.session.user_id
      },
      attributes: [
        'name',
        'mana_cost',
        'damage',
        'created_at' 
      ],
      order: [['created_at', 'DESC']],
    });
  
    const spell = spellData.map(spell => spell.get({ plain: true }));
    res.render('spell-page', { spell, loggedIn: true });
  
  } catch (err) { 
    console.log(err);
    res.status(500).json(err);
  }
});

router.get('/:id', async (req, res) => {
  try {
    const singleSpellData = await Spell.findOne({
      where: {
         id: req.params.id
      },
      attributes: [
        'name',
        'mana_cost',
        'damage',
        'created_at'
      ],
    });
  
    if (!singleSpellData) {
      res.status(404).json({ message: 'No spell found with this id' });
      return;
    }

    res.json(singleSpellData);
   
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

router.post('/', async (req, res)=> {
  try {
    const spellCreateData = await Spell.create({
      name: req.body.name,
      mana_cost: req.body.mana_cost,
      damage: req.body.damage,
      player_id: req.body.player_id
    });

    res.json(spellCreateData);
        
  } catch (err) {
    console.log(err);
    res.status(500).json(err);  
  }
});

router.put('/:id', async (req, res)=> {
  try {
    const spellUpdateData = await Spell.update({  
      name: req.body.name,
      mana_cost: req.body.mana_cost,
      damage: req.body.damage
    },
    {
    where: {
      id: req.params.id
    }
    });

    if(!spellUpdateData) {
    res.status(404).json({ message: 'No spell found with this id' });
    return;
    }

    res.json(spellUpdateData);
        
  } catch (err) {
    console.log(err);
    res.status(500).json(err); 
  }
});

router.delete('/:id', async (req, res)=> {
  try {
    const spellDeleteData = await Spell.delete({
      where: {
        id: req.params.id
      }
    });

    if(!spellDeleteData) {
      res.status(404).json({ message: 'No spell found with this id' });
      return;
    }

    res.json(spellDeleteData);
        
  } catch (err) {
    console.log(err);
    res.status(500).json(err);  
  }
});

module.exports = router;