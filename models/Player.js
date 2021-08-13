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
        switch(newPlayerData.class_id) {
          case 1:
            newPlayerData.art = '/img/stock-rogue.jpg';
            break;
          case 2:
            newPlayerData.art = '/img/stock-warlock.jpg';
            break;
          case 3:
            newPlayerData.art = '/img/stock-warrior.jpg';
            break;
          default:
            break;
        }
        return newPlayerData;
      }
    },
    sequelize,
    freezeTableName: true,
    underscored: true,
    modelName: 'player',
  }
);

module.exports = Player;