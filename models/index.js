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
});

Class.hasMany(Player, {
    foreignKey: 'class_id',
});

Player.belongsTo(Class, {
    foreignKey: 'class_id'
});

Player.hasOne(Weapon, {
    foreignKey: 'player_id',
    onDelete: 'CASCADE'
});

Player.hasOne(Armor, {
    foreignKey: 'player_id',
    onDelete: 'CASCADE'
});

Player.hasMany(Spell, {
    foreignKey: 'player_id',
    onDelete: 'CASCADE'
});

Weapon.belongsTo(Player, {
    foreignKey: 'player_id',
});

Armor.belongsTo(Player, {
    foreignKey: 'player_id',
});

Spell.belongsTo(Player, {
    foreignKey: 'player_id',
});

module.exports = { User, Player, Class, Weapon, Armor, Spell };
