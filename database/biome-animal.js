const sequelize = require('sequelize');
const connection = require('./database');

const BiomeAnimal =  connection.define('biome_animal',{
    biome:{
        type: sequelize.INTEGER,
        allowNull: false
    },
    Animal:{
        type: sequelize.INTEGER,
        allowNull: false
    }
});

Biome.sync({force: false});

module.exports = Biome;