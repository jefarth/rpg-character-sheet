const router = require('express').Router();
const { Class } = require('../../models');
const sequelize = require('../../config/connection');

router.get('/', async (req, res) => {
 
  try {
   
     const classData = await Class.findAll({
        where: {
            user_id: req.session.user_id
          },
      attributes: [
        'title',
        'bonus_hp',
        'bonus_mana',
        'created_at'
        
      ],
      order: [['created_at', 'DESC']],
    });
  
    const createdClass = classData.map(createdClass => createdClass.get({ plain: true }));
    res.render('classPage', { createdClass, loggedIn: true });
  
    } catch (err) {
      
      console.log(err);
      res.status(500).json(err);
  
    }
});

  
  
  router.get('/:id', async (req, res) => {
 
    try {
   
     const singleClassData = await Class.findOne({
        where: {
            id: req.params.id
          },
      attributes: [
        'title',
        'bonus_hp',
        'bonus_mana',
        'created_at'
      ],
    });
  
    if (!singleClassData) {
        res.status(404).json({ message: 'No class found with this id' });
        return;
      }

    res.json(singleClassData);
   
    } catch (err) {
      
      console.log(err);
      res.status(500).json(err);
  
    }
  });

  
  
  router.post('/', async (req, res)=> {

    try {

        const classCreateData = await Class.create({
          title: req.body.title,
          bonus_hp: req.body.bonus_hp,
          bonus_mana: req.body.bonus_mana
          });

          res.json(classCreateData);
        
    } catch (err) {

        console.log(err);
        res.status(500).json(err);
        
    }

  });

  router.put('/:id', async (req, res)=> {

    try {

        const classUpdateData = await Class.update({
           
          title: req.body.title,
          bonus_hp: req.body.bonus_hp,
          bonus_mana: req.body.bonus_mana
           
            },
            {
                where: {
                    id: req.params.id
                  }
            });

            if(!classUpdateData) {
                res.status(404).json({ message: 'No class found with this id' });
                return;
              }

          res.json(classUpdateData);
        
    } catch (err) {

        console.log(err);
        res.status(500).json(err);
        
    }

  });

  
  
  router.delete('/:id', async (req, res)=> {

    try {

        const classDeleteData = await Class.delete({
                where: {
                    id: req.params.id
                  }
            });

            if(!classDeleteData) {
                res.status(404).json({ message: 'No class found with this id' });
                return;
              }

          res.json(classDeleteData);
        
    } catch (err) {

        console.log(err);
        res.status(500).json(err);
        
    }

  });

module.exports = router;