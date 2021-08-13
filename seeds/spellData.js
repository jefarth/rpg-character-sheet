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
    damage: 5,
    player_id: 1
  },
  {
    id: 3,
    name: "Lightning Strike",
    mana_cost: 10,
    damage: 15,
    player_id: 1
  },
  {
    id: 4,
    name: "Battle Cry",
    mana_cost: 5,
    damage: 5,
    player_id: 2
  },
  {
    id: 5,
    name: "Poison Cloud",
    mana_cost: 15,
    damage: 20,
    player_id: 3
  },
];

const seedSpell = () => Spell.bulkCreate(spellData);

module.exports = seedSpell;