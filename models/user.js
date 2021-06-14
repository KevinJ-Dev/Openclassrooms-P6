const mongoose = require('mongoose');
//permets d'avoir un email unique pour l'inscription dans la base de données
const uniqueValidator = require('mongoose-unique-validator');

//modèle des utilisateurs
const userSchema = mongoose.Schema({
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true }
});

//utilisation du plugin uniquevalidator
userSchema.plugin(uniqueValidator);

module.exports = mongoose.model('user', userSchema);