const express = require('express');
const router = express.Router();

// Middleware avec auth pour sécuriser les connexions et Multer pour la gestion des images
const auth = require('../middleware/auth');
const multer = require('../middleware/multer-config');

// Controlleur de la route sauce
const sauceCtrl = require('../controllers/sauce');

// Les routes
router.post('/', auth, multer, sauceCtrl.createSauce);
router.post('/:id/like', auth, sauceCtrl.likeSauce);
router.get('/', auth, sauceCtrl.getAllSauces);
router.get('/:id', auth, sauceCtrl.getOneSauce);
router.put('/:id', auth, multer, sauceCtrl.updateSauce);
router.delete('/:id', auth, sauceCtrl.deleteSauce);

module.exports = router;