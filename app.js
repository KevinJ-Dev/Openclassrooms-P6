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

// Models
const User = require('./models/user');
const Sauce = require('./models/sauce')

// Routes 
const userRoutes = require('./routes/user');
const sauceRoutes = require('./routes/sauce');

// Donner accée aux requêtes et éviter les erreurs CORS
app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content, Accept, Content-Type, Authorization');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, PATCH, OPTIONS');
    next();
});

// Traitement par BodyParser
app.use(bodyParser.json());

app.use('/images', express.static(path.join(__dirname, 'images')));

// Url des routes
app.use('/api/sauces', sauceRoutes);
app.use('/', userRoutes);

//exporter une application pour rentrer dans les autres fichiers du projet notament le serveur
module.exports = app;