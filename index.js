const express = require("express")
const app = new express()
const router = require('./routes/routes')
const mongoose = require('mongoose')
const bodyParser = require('body-parser')

const PORT = 3000

//conncecter a mongo

mongoose.connect('mongodb://localhost/Contactb');

//body-parser
app.use(bodyParser.urlencoded({extended : true}));
app.use(bodyParser.json());



//routes
app.use('/' , router)

//ecouter le port a la port 3000
app.listen(PORT ,()=>{
    console.log(`serveur lancer a ${PORT}`)
})