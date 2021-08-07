const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Third_Spell extends Model {}

Third_Spell.init(
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
    modelName: 'third_spell',
  }
);

module.exports = Third_Spell;