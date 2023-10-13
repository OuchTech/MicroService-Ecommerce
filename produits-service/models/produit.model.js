const db = require('./db');

class Produit {
    constructor(data) {
        this.nom = data.nom;
        this.prix = data.prix;
    }

    save() {
        return new Promise((resolve, reject) => {
            db.run('INSERT INTO produits (nom, prix) VALUES (?, ?)', [this.nom, this.prix], function(err) {
                if (err) reject(err);
                resolve(this.lastID);
            });
        });
    }

    static findAll() {
        return new Promise((resolve, reject) => {
            db.all('SELECT * FROM produits', [], (err, rows) => {
                if (err) reject(err);
                resolve(rows);
            });
        });
    }
}

// Initialization of the table
db.serialize(() => {
    db.run("CREATE TABLE produits (id INTEGER PRIMARY KEY, nom TEXT, prix NUMBER)");
});

module.exports = Produit;
