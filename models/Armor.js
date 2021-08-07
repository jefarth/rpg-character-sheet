const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Armor extends Model {}

Armor.init(
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
    bonus_def: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
    lvl_req: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
    character_id: {
      type: DataTypes.INTEGER,
      references: {
        model: 'character',
        key: 'id',
      },
    },
  },
  {
    sequelize,
    freezeTableName: true,
    underscored: true,
    modelName: 'armor',
  }
);

module.exports = Armor;