const { Commande } = require('../models/commande.model');

const createCommande = async (req, res) => {
    try {
        const commande = new Commande(req.body);
        await commande.save();
        res.status(201).send(commande);
    } catch (error) {
        res.status(500).send({ message: "Erreur lors de la création de la commande." });
    }
};

const getAllCommandes = async (req, res) => {
    try {
        const commandes = await Commande.findAll();
        res.status(200).send(commandes);
    } catch (error) {
        res.status(500).send({ message: "Erreur lors de la récupération des commandes." });
    }
};

const getCommandeById = async (req, res) => {
    try {
        const commande = await Commande.findOne({ where: { id: req.params.id } });
        if (!commande) {
            res.status(404).send({ message: "Commande non trouvée." });
        } else {
            res.status(200).send(commande);
        }
    } catch (error) {
        res.status(500).send({ message: "Erreur lors de la récupération de la commande." });
    }
};

const updateCommande = async (req, res) => {
    try {
        const commande = await Commande.update(req.body, {
            where: { id: req.params.id }
        });
        if (commande[0] === 0) {
            res.status(404).send({ message: "Commande non trouvée." });
        } else {
            res.status(200).send({ message: "Commande mise à jour avec succès." });
        }
    } catch (error) {
        res.status(500).send({ message: "Erreur lors de la mise à jour de la commande." });
    }
};

const deleteCommande = async (req, res) => {
    try {
        const commandeDeleted = await Commande.destroy({ where: { id: req.params.id } });
        if (commandeDeleted === 1) {
            res.status(200).send({ message: "Commande supprimée avec succès." });
        } else {
            res.status(404).send({ message: "Commande non trouvée." });
        }
    } catch (error) {
        res.status(500).send({ message: "Erreur lors de la suppression de la commande." });
    }
};

module.exports = {
    createCommande,
    getAllCommandes,
    getCommandeById,
    updateCommande,
    deleteCommande
};
