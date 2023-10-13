const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const produitRoutes = require('./routes/produit.routes');

const app = express();
const PORT = 3000;

app.use(bodyParser.json());
app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(produitRoutes);

app.listen(PORT, () => {
    console.log(`Produits service démarré sur le port ${PORT}`);
});

module.exports = app;  // pour les tests éventuels et autres importations
