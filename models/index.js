const User = require('./User');
const Player = require('./Player');
const Class = require('./Class');
const Weapon = require('./Weapon');
const Armor = require('./Armor');
const Spell = require('./Spell');

User.hasMany(Player, {
  foreignKey: 'id',
  onDelete: 'CASCADE'
});

Player.belongsTo(User, {
    foreignKey: 'id',
    constraints: false,
});

Player.hasOne(Class, {
    foreignKey: 'player_id'
});

Player.hasOne(Weapon, {
    foreignKey: 'player_id'
});

Player.hasOne(Armor, {
    foreignKey: 'player_id',
    onDelete: 'CASCADE'
});

Player.hasMany(Spell, {
    foreignKey: 'player_id',
    onDelete: 'CASCADE'
});

Class.belongsTo(Player, {
    foreignKey: 'player_id',
    constraints: false,
});

// Weapon.belongsTo(Player, {
//     foreignKey: 'player_id',
//     constraints: false,
// });

Armor.belongsTo(Player, {
    foreignKey: 'player_id',
    constraints: false,
});

Spell.belongsTo(Player, {
    foreignKey: 'player_id',
    constraints: false,
});

module.exports = { User, Player, Class, Weapon, Armor, Spell };
