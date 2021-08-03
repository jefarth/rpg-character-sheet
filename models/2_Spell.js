const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Second_Spell extends Model {}

Second_Spell.init(
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
    modelName: 'second_spell',
  }
);

module.exports = Second_Spell;