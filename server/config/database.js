const { Sequelize } = require('sequelize');
const path = require('path');

const sequelize = new Sequelize({
    dialect: 'sqlite',
    storage: path.join(__dirname, '../database.sqlite'), // Adjust path as needed
    logging: console.log  // Set to false in production
});

module.exports = sequelize;