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
    weapon_id: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'weapon',
        key: 'id'
      }
    },
    armor_id: {
      type:DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'armor',
        key: 'id'
      }
    },
    spell: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'spell',
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
        if(newPlayerData.art === null) {
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
      }
    },
    sequelize,
    freezeTableName: true,
    underscored: true,
    modelName: 'player',
  }
);

module.exports = Player;