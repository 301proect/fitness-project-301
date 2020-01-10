'use strict';
// to make the enviroment(.env) ready to read 
require('dotenv').config();
// 
const express = require('express');
// we use the superagent to make the API ready 
const superagent = require('superagent');
// cross origin resourses sharing 
const cors = require('cors');
// to talk with the DB
const pg = require('pg');
const DATABASE_URL = process.env.DATABASE_URL;
const client = new pg.Client(DATABASE_URL)
// call the express in our server
const server = express();
server.use(cors());
// initilizing request method instead of superagent 
var request = require("request");

const PORT = process.env.PORT || 3000;

// middleware 
server.use(express.urlencoded({ extended: true }));


server.set('view engine', 'ejs');

// to use public folder
// server.use( express.static('/public'));


// server.listen(PORT,()=>{
//     console.log(`listening on PORT${PORT}`)
// })

server.get('/', (req, res) => {
    res.status(200).render('index')
})

server.get('/newMeal', (req, res) => {
    res.render('pages/searches/new')
})

// first route to get the mealplan #1
server.post('/mealLest', getMeals) ;

function getMeals(req, res) {

    // console.log(req.body)
    // let time = req.body.time ;
    let calories = req.body.calories;
    let dietType = req.body.dietType;
    let spicial = req.body.spicial;

    var options = {
        method: 'GET',
        url: 'https://spoonacular-recipe-food-nutrition-v1.p.rapidapi.com/recipes/mealplans/generate',
        qs: {
            timeFrame: `day`,
            targetCalories: `${calories}`,
            diet: `${dietType}`,
            exclude: `${spicial}`
        },
        headers: {
            'x-rapidapi-host': 'spoonacular-recipe-food-nutrition-v1.p.rapidapi.com',
            'x-rapidapi-key': 'c3aaa42847msh4114d8320e35996p116efbjsnc1bea287f44f'
        }
    }

    request(options, function (error, response, body) {
        let data = JSON.parse(body);
        console.log(data);
        res.render('pages/searches/show', { food: data })
        if (error) throw new Error(error);

    });
}

// second route to get exercise





server.use('*', (req, res) => {
    res.status(404).send(' 404 ERROR !!!')
})
server.use((error, req, res) => {
    res.status(500).send(error)
})

client.on('error', error => {
    throw error;
})
client.connect()
    .then(() => {
        server.listen(PORT, () => console.log('server works in DB', PORT))
    })
    .catch(err => {
        throw `Error happened ${err}`;
    })