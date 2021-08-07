const User = require('./User');
const Character = require('./Character');
const Class = require('./Class');
const Weapon = require('./Weapon');
const Armor = require('./Armor');
const Spell1 = require('./Spell1');
const Spell2 = require('./Spell2');
const Spell3 = require('./Spell3');

User.hasMany(Character, {
  foreignKey: 'id',
});

Character.belongsTo(User, {
  foreignKey: 'id',
  constraints: false
});

Class.belongsTo(Character, {

    foreignKey: 'class_id',
    constraints: false

});

Weapon.belongsTo(Character, {

foreignKey: 'weapon_id',

constraints: false

});

Armor.belongsTo(Character, {

    foreignKey: 'armor_id',

    constraints: false

});

Spell1.belongsTo(Character, {

    foreignKey: 'first_spell',

    constraints: false

});

Spell2.belongsTo(Character, {

    foreignKey: 'second_spell',

    constraints: false

});

Spell3.belongsTo(Character, {

    foreignKey: 'third_spell',

    constraints: false

});

module.exports = { User, Character, Class, Weapon, Armor, Spell1, Spell2, Spell3 };
