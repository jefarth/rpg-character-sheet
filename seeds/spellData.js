const { Spell } = require('../models');

const spellData = [
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

const seedSpell = () => Spell.bulkCreate(spellData);

module.exports = seedSpell;