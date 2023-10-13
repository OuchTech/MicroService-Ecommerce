const express = require('express');
const router = express.Router();

const commandeController = require('./controllers/commande.controller');

// Route pour créer une nouvelle commande
router.post('/commandes', commandeController.createCommande);

// Route pour récupérer toutes les commandes
router.get('/commandes', commandeController.getAllCommandes);

// Route pour récupérer une commande spécifique via son ID
router.get('/commandes/:id', commandeController.getCommandeById);

// Route pour mettre à jour une commande via son ID
router.put('/commandes/:id', commandeController.updateCommande);

// Route pour supprimer une commande via son ID
router.delete('/commandes/:id', commandeController.deleteCommande);

module.exports = router;
