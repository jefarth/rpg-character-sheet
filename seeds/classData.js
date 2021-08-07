const { Class } = require('../models');

const classData = [
    {
      id: 1,
      title: "Rogue",
      bonus_hp: 5,
      bonus_mana: 3
    
     
    },

    {
        id: 2,
        title: "Warlock",
        bonus_hp: 8,
        bonus_mana: 10
      
       
    },

    {
        id: 3,
        title: "Warrior",
        bonus_hp: 15,
        bonus_mana: 5
      
       
      },
   
  ];

  const seedClass = () => Class.bulkCreate(classData);

  module.exports = seedClass;