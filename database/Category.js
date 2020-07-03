const sequelize = require('sequelize');
const connection = require('./database');

const Category = connection.define('category',{
    name:{
        type: sequelize.TEXT,
        allowNull: false
    }
});

Category.sync({force: false});

module.exports = Category;