const sequelize = require('../config/connection');
const userData = require('./userData');
const characterData = require('./characterData');
const classData = require('./classData')
const weaponData = require('./weaponData');
const armorData = require('./armorData');
const spell1Data = require('./spell1');
const spell2Data = require('./spell2');
const spell3Data = require('./spell3');

const seedDatabase = async () => {
await sequelize.sync({ force: true });

await userData();

await spell3Data();

await spell2Data();

await spell1Data();

await armorData();

await weaponData();

await classData();

await characterData();

 
  process.exit(0);
 };

 seedDatabase();
