const sequelize = require('../config/connection');
const seedUserData = require('./userData');
const seedPlayerData = require('./playerData');
const seedClass = require('./classData')
const seedWeapons = require('./weaponData');
const seedArmor = require('./armorData');
const seedSpell = require('./spellData');

const seedDatabase = async () => {
    await sequelize.sync({ force: true });

    await seedUserData();

    await seedPlayerData();

    await seedSpell();

    await seedArmor();

    await seedWeapons();

    await seedClass();

    process.exit(0);
};

seedDatabase();
