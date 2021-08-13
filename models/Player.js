const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Player extends Model {}

Player.init(
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
      allowNull: false,
      references: {
        model: 'class',
        key: 'id'
      }
    },
    user_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'user',
        key: 'id'
      }
    },
    art: {
      type: DataTypes.STRING,
      allowNull: true,
    }
  },
  {
    hooks: {
      // If no art is selected, choose a stock image
      beforeCreate: (newPlayerData) => {
        switch(newPlayerData.dataValues.class_id) {
          case '1':
            newPlayerData.dataValues.art = '/img/stock-rogue.jpg';
            return newPlayerData;
          case '2':
            newPlayerData.dataValues.art = '/img/stock-warlock.jpg';
            return newPlayerData;
          case '3':
            newPlayerData.dataValues.art = '/img/stock-warrior.jpg';
            return newPlayerData;
          default:
            return newPlayerData;
        }
      }
    },
    sequelize,
    freezeTableName: true,
    underscored: true,
    modelName: 'player',
  }
);

module.exports = Player;