const sequelize = require('sequelize');
const { Sequelize } = require('sequelize');

const connection = new Sequelize('bd_zoopedia', 'root', '1234', {
    host: 'localhost',
    dialect: 'mysql'
});

module.exports = connection;