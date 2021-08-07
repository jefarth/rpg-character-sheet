const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Character extends Model {}

Character.init(
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
    level: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    base_hp: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    base_mana: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    base_atk: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    base_def: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    class_id: {
      type: DataTypes.INTEGER,
      references: {
        model: 'class',
        key: 'id',
      },
    },
    weapon_id: {
        type: DataTypes.INTEGER,
        references: {
          model: 'weapon',
          key: 'id',
        },
    },
    armor_id: {
        type: DataTypes.INTEGER,
        references: {
          model: 'armor',
          key: 'id',
        },
    },
    spell1: {
        type: DataTypes.INTEGER,
        references: {
          model: 'first_spell',
          key: 'id',
        },
    },
    spell2: {
        type: DataTypes.INTEGER,
        references: {
          model: 'second_spell',
          key: 'id',
        },
    },
    spell3: {
        type: DataTypes.INTEGER,
        references: {
          model: 'third_spell',
          key: 'id',
        },
    },
  },
  {
    sequelize,
    freezeTableName: true,
    underscored: true,
    modelName: 'character',
  }
);

module.exports = Character;