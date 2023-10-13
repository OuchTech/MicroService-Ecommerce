const Produit = require('../models/produit.model');

exports.createProduit = async (req, res) => {
    try {
        let produit = new Produit(req.body);
        await produit.save();
        res.status(201).send(produit);
    } catch (error) {
        res.status(500).send({ message: 'Erreur lors de la création du produit.', error: error.message });
    }
};

exports.getAllProduits = async (req, res) => {
    try {
        const produits = await Produit.findAll();
        res.status(200).send(produits);
    } catch (error) {
        res.status(500).send({ message: 'Erreur lors de la récupération des produits.', error: error.message });
    }
};
