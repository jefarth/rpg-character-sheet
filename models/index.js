const User = require('./User');
const Character = require('./Character');
const Class = require('./Class');
const Weapon = require('./Weapon');
const Armor = require('./Armor');
const Spell = require('./Spell');

User.hasMany(Character, {
  foreignKey: 'id',
});

Character.hasOne(Class, {
    foreignKey: 'character_id'
});

Character.hasOne(Weapon, {
    foreignKey: 'character_id'
});

Character.hasOne(Armor, {
    foreignKey: 'character_id'
});

Character.hasMany(Spell, {
    foreignKey: 'character_id'
});

Character.belongsTo(User, {
    foreignKey: 'id',
    constraints: false
});

Class.belongsTo(Character, {
    foreignKey: 'character_id',
    constraints: false
});

Weapon.belongsTo(Character, {
    foreignKey: 'character_id',
    constraints: false
});

Armor.belongsTo(Character, {
    foreignKey: 'character_id',
    constraints: false
});

Spell.belongsTo(Character, {
    foreignKey: 'character_id',
    constraints: false
});

module.exports = { User, Character, Class, Weapon, Armor, Spell };
