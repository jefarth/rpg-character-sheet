const { Character } = require('../models');


const characterData = [
    {
      id: 1,
      name: "Balthazar",
      level: 5,
      base_hp: 15,
      base_mana: 15,
      base_atk: 20,
      base_def: 10,
      class_id: 1,
      weapon_id: 2,
      armor_id: 3,
      spell1: 1,
      spell2: 2,
      spell3: 3

     
    },
   
  ];

  const seedCharacterData = () => Character.bulkCreate(characterData);

  module.exports = seedCharacterData;
  