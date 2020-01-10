'use strict';
// to make the enviroment(.env) ready to read 
require('dotenv').config();
// 
const express = require('express');
// we use the superagent to make the API ready 
const superagent = require('superagent');
// cross origin resourses sharing 
const cors = require('cors');
const PORT = process.env.PORT || 3000 ;
// to talk with the DB
const pg = require('pg');
const DATABASE_URL = process.env.DATABASE_URL;
const client = new pg.Client(DATABASE_URL)
// call the express in our server
const server = express();
server.use(cors());

server.use(express.urlencoded({ extended: true }));
server.set('view engine', 'ejs');

server.use('/public', express.static('public'));

// to use public folder


// server.listen(PORT,()=>{
//     console.log(`listening on PORT${PORT}`)
// })

server.get('/',(req,res)=>{
    res.render('index');
})
server.get('/test',(req,res)=>{
    res.status(200).send('hi I am alive')
})

server.use('*',(req,res)=>{
    res.status(404).send('nothing there')
})
server.use((error,req,res)=>{
    res.status(500).send(error)
})

client.on('error', error =>{
    throw error;
})
client.connect()
    .then(()=>{
        server.listen(PORT,()=>console.log('server works in DB', PORT))
    })
.catch(err =>{
    throw `Error happened ${err}`;
})