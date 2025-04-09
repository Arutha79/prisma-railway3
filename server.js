const express = require("express");
const app = express();
const PORT = process.env.PORT || 3000;

// Middleware (utile pour parsing JSON si tu l’utilises plus tard)
app.use(express.json());

// Route de test pour vérifier le bon fonctionnement
app.get("/", (req, res) => {
  res.status(200).send("🎯 Prisma Railway is running !");
});

// Lancement du serveur
app.listen(PORT, () => {
  console.log(`✅ Serveur Prisma en ligne sur le port ${PORT}`);
});

// Gestion des erreurs serveur (optionnel mais recommandé)
app.on("error", (err) => {
  console.error("❌ Erreur serveur :", err);
});
