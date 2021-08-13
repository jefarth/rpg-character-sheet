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
      user_id: 1,
      art: '/img/stock-rogue.jpg',
    },
  ];

  const seedPlayerData = () => Player.bulkCreate(playerData);

  module.exports = seedPlayerData;
  