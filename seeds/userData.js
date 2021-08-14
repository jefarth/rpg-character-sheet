const { User } = require ('../models');

const userData = [
  {
    id: 1,
    username: "Sal",
    email: "sal@hotmail.com",
    password: "password12345"
  },
  {
    id: 2,
    username: "Lernantino",
    email: "lernantino@gmail.com",
    password: "password12345"
  },
  {
    id: 3,
    username: "Amiko",
    email: "amiko2k20@aol.com",
    password: "password12345"
  },
];

const seedUserData = () => User.bulkCreate(userData);

module.exports = seedUserData;