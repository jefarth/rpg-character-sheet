const router = require('express').Router();
const { Armor } = require('../../models');
const sequelize = require('../../config/connection');

router.get('/', async (req, res) => {
  try {
    const armorData = await Armor.findAll({
      where: {
        user_id: req.session.user_id
      },
      attributes: [
        'name',
        'bonus_def',
        'lvl_req',
        'player_id',
        'created_at'
      ],
      order: [['created_at', 'DESC']],
    });
    const armor = armorData.map(armor => armor.get({ plain: true }));
    res.render('armor-page', { armor, loggedIn: true });
  
    } catch (err) {
      
      console.log(err);
      res.status(500).json(err);
  
    }
});

router.get('/:id', async (req, res) => {
  try {
    const singleArmorData = await Armor.findOne({
      where: {
        id: req.params.id
      },
      attributes: [
        'name',
        'bonus_def',
        'lvl_req',
        'player_id',
        'created_at'
      ],
    });
  
    if (!singleArmorData) {
      res.status(404).json({ message: 'No armor found with this id' });
      return;
    }

    res.json(singleArmorData);
   
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

router.post('/', async (req, res)=> {
  try {
    const armorCreateData = await Armor.create({
      name: req.body.name,
      bonus_def: req.body.bonus_def,
      lvl_req: req.body.lvl_req,
      player_id: req.body.player_id
    });

    res.json(armorCreateData);
        
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

router.put('/:id', async (req, res)=> {
  try {
    const armorUpdateData = await Armor.update({
      name: req.body.name,
      bonus_def: req.body.bonus_def,
      lvl_req: req.body.lvl_req
    },
    {
      where: {
        id: req.params.id
      }
    });

    if(!armorUpdateData) {
      res.status(404).json({ message: 'No armor found with this id' });
      return;
    }

    res.json(armorUpdateData); 

  } catch (err) {
    console.log(err);
    res.status(500).json(err);    
  }
});
 
router.delete('/:id', async (req, res)=> {
  try {
    const armorDeleteData = await Armor.delete({
      where: {
        id: req.params.id
      }
    });

    if(!armorDeleteData) {
      res.status(404).json({ message: 'No armor found with this id' });
      return;
    }

    res.json(armorDeleteData);
        
  } catch (err) {
    console.log(err);
    res.status(500).json(err); 
  }
});

module.exports = router;