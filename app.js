//importer express
const express = require('express');
//import mongoose
const mongoose = require('mongoose');
//import body-parser
const bodyParser = require('body-parser');

mongoose.set('useCreateIndex', true);
//import path
const path = require('path');
//créer une application express
const app = express();

// Connection à la base de donnée Mongoose
mongoose.connect('mongodb+srv://Admin:tX56lH0tchRbbTTk@cluster0.pi3xb.mongodb.net/myFirstDatabase?retryWrites=true&w=majority',
    {
        useNewUrlParser: true,
        useUnifiedTopology: true
    })
    .then(() => console.log('Connexion à MongoDB réussie !'))
    .catch(() => console.log('Connexion à MongoDB échouée !'));

const User = require('./models/user');

// Routes 
const userRoutes = require('./routes/user');

//exporter une application pour rentrer dans les autres fichiers du projet notament le serveur
module.exports = app;