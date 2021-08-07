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
    spell_1: {
        type: DataTypes.INTEGER,
        references: {
          model: 'spell_1',
          key: 'id',
        },
    },
    spell_2: {
        type: DataTypes.INTEGER,
        references: {
          model: 'spell_2',
          key: 'id',
        },
    },
    spell_3: {
        type: DataTypes.INTEGER,
        references: {
          model: 'spell_3',
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