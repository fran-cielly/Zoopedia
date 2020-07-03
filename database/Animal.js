const sequelize = require('sequelize');
const connection = require('./database');

const Animal = connection.define('animal',{
    name:{
        type: sequelize.TEXT,
        allowNull: false
    },
    name_scientific:{
        type: sequelize.TEXT,
        allowNull: false
    },
    category:{
        type: sequelize.INTEGER,
        allowNull: false
    },
    continent:{
        type: sequelize.INTEGER,
        allowNull: false
    },
    regions:{
        type: sequelize.TEXT,
        allowNull: false
    },
    area_land:{
        type: sequelize.INTEGER,
        allowNull: false
    },
    area_water:{
        type: sequelize.INTEGER,
        allowNull: false
    },
    area_climbable:{
        type: sequelize.INTEGER,
        allowNull: false
    },
    fence:{
        type: sequelize.TEXT,
        allowNull: false
    },
    temperature:{
        type: sequelize.STRING,
        allowNull: false
    },
    group:{
        type: sequelize.TEXT,
        allowNull: false
    },
    visitors_can_enter:{
        type: sequelize.BOOLEAN,
        allowNull: false
    }, 
    relationship_visitors:{
        type: sequelize.TEXT,
        allowNull: false
    },
    size_fem:{
        type: sequelize.DOUBLE,
        allowNull: false
    }, 
    size_masc:{
        type: sequelize.DOUBLE,
        allowNull: false
    }, 
    weight_fem:{
        type: sequelize.DOUBLE,
        allowNull: false
    }, 
    weight_masc:{
        type: sequelize.DOUBLE,
        allowNull: false
    },
    expec_life_fem:{
        type: sequelize.INTEGER,
        allowNull: false
    },
    expec_life_masc:{
        type: sequelize.INTEGER,
        allowNull: false
    },
});

Animal.sync({force:false});

module.exports = Animal;