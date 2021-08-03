const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class First_Spell extends Model {}

First_Spell.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    name: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    mana_cost: {
        type: DataTypes.INTEGER,
        allowNull: true,
    },
    damage: {
        type: DataTypes.INTEGER,
        allowNull: true,
    },
 
  },
  {
    sequelize,
    freezeTableName: true,
    underscored: true,
    modelName: 'first_spell',
  }
);

module.exports = First_Spell;