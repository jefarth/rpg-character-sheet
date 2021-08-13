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
    {
      id: 2,
      name: "Stormheart",
      level: 10,
      base_hp: 25,
      base_mana: 5,
      base_atk: 10,
      base_def: 20,
      class_id: 3,
      user_id: 2,
      art: '/img/stock-warrior.jpg',
    },
    {
      id: 3,
      name: "Rembrandt",
      level: 7,
      base_hp: 10,
      base_mana: 20,
      base_atk: 5,
      base_def: 25,
      class_id: 2,
      user_id: 3,
      art: '/img/stock-warlock.jpg',
    },
  ];

  const seedPlayerData = () => Player.bulkCreate(playerData);

  module.exports = seedPlayerData;
  