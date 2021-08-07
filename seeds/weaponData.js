const { Weapon } = require('../models');

const weaponData = [
  {
    id: 1,
    name: "Sword of the Undead",
    bonus_atk: 7,
    lvl_req: 8
  },
  {
    id: 2,
    name: "Staff of Light",
    bonus_atk: 4,
    lvl_req: 6
  },
  {
    id: 3,
    name: "Poison Dagger",
    bonus_atk: 10,
    lvl_req: 10
  },
];

const seedWeapons = () => Weapon.bulkCreate(weaponData);

module.exports = seedWeapons;