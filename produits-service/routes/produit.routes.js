const express = require('express');
const produitController = require('../controllers/produit.controller');
const router = express.Router();

router.post('/produits', produitController.createProduit);
router.get('/produits', produitController.getAllProduits);

module.exports = router;
