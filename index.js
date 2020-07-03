const express = require('express');
const app = express();
const bodyParser = require('body-parser');

const connection = require('./database/database');

const Animal = require('./database/Animal');
const Biome = require('./database/Biome');
const Continent = require('./database/Continent');
const Category = require('./database/Category');

connection.authenticate().then(()=>{
    console.log("Conectado ao banco");
}).catch((msgErro)=>{
    console.log(msgErro);
});

app.use(bodyParser.json());

app.get('/listAnimals',(req, resp) =>{
    var body = JSON.stringify(req.body);
    body =  JSON.parse(body);

    var category = body.category;
    var continent = body.continent;
    var biome = body.biome;

    var id = undefined;
    Animal.findAll(
        {raw:true, order:[['name', 'ASC']]}).then(animals=>{

        let animalsFilter = animals;

        if(animals != undefined){
            if(category != undefined){
                animalsFilter = animals.filter((animal)=>{
                    return animal.category == category;
                });
            }
            if(continent != undefined){
                animalsFilter = animals.filter((animal)=>{
                    return animal.continent == continent;
                });
            }
            if(biome != undefined){
                animalsFilter = animals.filter((animal)=>{
                    return animal.biome == biome;
                });
            }
          
            resp.json(animalsFilter);
        }else{
            resp.json("Nenhum animal encontrado");
        }
       
    });
});

app.get('/getAnimal', (req, resp)=>{
    var body = JSON.stringify(req.body);
    body =  JSON.parse(body);

    Animal.findOne({
        where: {id: body.id}
    }).then(animal =>{

        if(animal != undefined){
            resp.json(animal);
        }else{
            resp.json("Animal não encontrado");
        }
    })
});

app.post('/newAnimal', (req, resp) =>{

    var body = JSON.stringify(req.body);
    var animal =  JSON.parse(body);

    Animal.create({
        name: animal.name,
        name_scientific: animal.name_scientific,
        category: animal.category,
        continent: animal.continent,
        regions: animal.regions,
        //biomes
        area_land: animal.area_land,
        area_water: animal.area_water,
        area_climbable: animal.area_climbable,
        fence: animal.fence,
        temperature: animal.temperature,
        group : animal.group,
        visitors_can_enter: animal.visitors_can_enter,
        relationship_visitors: animal.relationship_visitors,
        size_fem: animal.size_fem,
        size_masc: animal.size_masc,
        weight_fem: animal.weight_fem,
        weight_masc: animal.weight_masc,
        expec_life_fem: animal.expec_life_fem,
        expec_life_masc: animal.expec_life_masc
    }).then(()=>{
        resp.json();
    });
});

app.listen(8181);