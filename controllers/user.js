//(avec bcryp pour hasher le mdp, jwt pour le token d'authentification et Crypto afin de chiffrer l'email)
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const crypto = require('crypto');

// Import du modèle User
const User = require('../models/user');

// Création d'un nouvel utilisateur
exports.signup = (req, res, next) => {
    //Hashage du mot de passe par Bcrypt
    bcrypt.hash(req.body.password, 10)
        .then(
            hash => {
                const user = new User({
                    email: req.body.email,
                    password: hash
                });
                // Verification des enregistrements cryptés
                // console.log("Voici l'email encrypté", encodedString);
                console.log("Voici le mot de passe hashé : ", hash);
                user.save()
                    .then(() => res.status(201).json({ message: 'Utilisateur créé' }))
                    .catch(error => res.status(400).json({ error }));
            })
        .catch(error => res.status(500).json({ error }));
};
// Récupération d'un utilisateur déja existant dans la base de donnée
exports.login = (req, res, next) => {
    User.findOne({ email: req.body.email })
        .then(user => {
            if (!user) {
                return res.status(401).json({ error: 'Utilisateur non trouvé !' });
            }
            // Bcrypt compare ici le hashage du mot de passe
            bcrypt.compare(req.body.password, user.password)
                .then(valid => {
                    if (!valid) {
                        return res.status(401).json({ error: 'Mot de passe incorrect !' });
                    }
                    res.status(200).json({
                        userId: user._id,
                        token: jwt.sign(
                            // Attribution du token d'authentification qui durera 24h
                            { userId: user._id },
                            'T66755GJS8ZK3K4BB4777D777bdhs66',
                            { expiresIn: '24h' }
                        )
                    });
                })
                .catch(error => res.status(500).json({ error }));
        })
        .catch(error => res.status(500).json({ error }));
};