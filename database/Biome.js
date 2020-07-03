const sequelize = require('sequelize');
const connection = require('./database');

const Biome =  connection.define('biome',{
    name:{
        type: sequelize.TEXT,
        allowNull: false
    }
});

Biome.sync({force: false});

module.exports = Biome;