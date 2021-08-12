const { Player } = require('../models');


const playerData = [
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
      spells: [1,2],
    },
  ];

  const seedPlayerData = () => Player.bulkCreate(playerData);

  module.exports = seedPlayerData;
  