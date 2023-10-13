const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const { Sequelize } = require('sequelize');

const commandeRoutes = require('./commande.routes');

const app = express();

// Configuration de la base de données SQLite
const sequelize = new Sequelize({
    dialect: 'sqlite',
    storage: './database.sqlite'
});

sequelize.authenticate()
    .then(() => {
        console.log('Connexion à la base de données SQLite établie avec succès.');
    })
    .catch(err => {
        console.error('Impossible de se connecter à la base de données:', err);
    });

// Middleware
app.use(cors()); // Pour gérer les problèmes de CORS
app.use(bodyParser.json()); // Pour gérer les requêtes JSON
app.use(bodyParser.urlencoded({ extended: true }));

// Utilisation des routes
app.use(commandeRoutes);

// Écoute sur le port 4000 (ou tout autre port de votre choix)
const PORT = 4000;

app.listen(PORT, () => {
    console.log(`Service Commandes démarré sur le port ${PORT}`);
});
