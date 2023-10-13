module.exports = (err, req, res, next) => {
    // Loggez l'erreur pour le débogage
    console.error(err.stack);

    if (err.name === 'ValidationError') {
        // Cela peut être une erreur spécifique à Mongoose lors de la validation
        return res.status(400).json({ message: err.message });
    }

    if (err.name === 'NotFoundError') {
        // Vous pouvez lancer des erreurs personnalisées dans votre application
        return res.status(404).json({ message: err.message });
    }

    // Pour les erreurs non prises en compte, renvoyez un code d'erreur 500 (Erreur serveur interne)
    return res.status(500).json({
        message: "Erreur serveur interne. Veuillez réessayer plus tard."
    });
};
