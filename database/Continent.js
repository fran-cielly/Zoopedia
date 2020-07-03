const sequelize = require('sequelize');
const connection = require("./database");

const Continent = connection.define('continent',{
    name:{
        type: sequelize.TEXT,
        allowNull: false
    }
});

Continent.sync({force:false});

module.exports = Continent;