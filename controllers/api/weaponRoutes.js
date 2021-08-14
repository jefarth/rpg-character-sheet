const router = require('express').Router();
const { Weapon } = require('../../models');
const sequelize = require('../../config/connection');

router.get('/', async (req, res) => {
  try {
    const weaponData = await Weapon.findAll({
      where: {
        user_id: req.session.user_id
      },
      attributes: [
        'name',
        'bonus_atk',
        'lvl_req',
        'player_id',
        'created_at'
      ],
      order: [['created_at', 'DESC']],
    });

    const weapons = weaponData.map(weapon => weapon.get({ plain: true }));
    res.render('weapons-page', { weapons, loggedIn: true });
  
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});
  
router.get('/:id', async (req, res) => {
  try {
    const singleWeaponData = await Weapon.findOne({
      where: {
        id: req.params.id
      },
      attributes: [
        'name',
        'bonus_atk',
        'lvl_req',
        'player_id',
        'created_at'
      ],
    });
  
    if (!singleWeaponData) {
      res.status(404).json({ message: 'No weapon found with this id' });
      return;
    }

    res.json(singleWeaponData);
   
  } catch (err) { 
    console.log(err);
    res.status(500).json(err);
  }
});

router.post('/', async (req, res)=> {
  try {
    const weaponCreateData = await Weapon.create({
      name: req.body.name,
      bonus_atk: req.body.bonus_atk,
      lvl_req: req.body.lvl_req,
      player_id: req.body.player_id
    });

    res.json(weaponCreateData);
        
  } catch (err) {
    console.log(err);
    res.status(500).json(err); 
  }
});

router.put('/:id', async (req, res)=> {
  try {
    const weaponUpdateData = await Weapon.update({ 
      name: req.body.name,
      bonus_atk: req.body.bonus_atk,
      lvl_req: req.body.lvl_req
    },
    {
      where: {
        id: req.params.id
      }
    });

    if(!weaponUpdateData) {
      res.status(404).json({ message: 'No weapon found with this id' });
      return;
    }

    res.json(weaponUpdateData);
        
  } catch (err) {
    console.log(err);
    res.status(500).json(err);  
  }
});

router.delete('/:id', async (req, res)=> {
  try {
    const weaponDeleteData = await Weapon.delete({
      where: {
        id: req.params.id
      }
    });

    if(!weaponDeleteData) {
      res.status(404).json({ message: 'No weapon found with this id' });
      return;
    }

    res.json(weaponDeleteData);
        
  } catch (err) {
    console.log(err);
    res.status(500).json(err);  
  }
});

module.exports = router;
