const { Spell1 } = require('../models');


const spell1Data = [
    {
    
    id: 1,
    name: "Fireball",
    mana_cost: 7,
    damage: 8
  
   
  },

  {

    id: 2,
    name: "Blizzard",
    mana_cost: 5,
    damage: 5


  },

  {

    id: 3,
    name: "Lightning Strike",
    mana_cost: 10,
    damage: 15


  },
];

const seedSpell1 = () => Spell1.bulkCreate(spell1Data);

  module.exports = seedSpell1;