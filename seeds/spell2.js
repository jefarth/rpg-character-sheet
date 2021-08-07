const { Spell2 } = require('../models');


const spell2Data = [
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

const seedSpell2 = () => Spell2.bulkCreate(spell2Data);

  module.exports = seedSpell2;