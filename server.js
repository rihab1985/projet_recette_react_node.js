// server.js
const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
const connectDB = require('./config/db');
// Charger les variables d'environnement (si .env existe)
dotenv.config();

const app = express();

// Middlewares de base
app.use(cors());
app.use(express.json());

// Route de test
app.get('/api/health', (req, res) => {
  res.json({ status: 'OK', message: 'API Recettes fonctionne 🚀 (version minimale)' });
});
const authRoutes = require('./routes/authRoutes');
app.use('/api/auth', authRoutes);
const recipeRoutes = require('./routes/recipeRoutes');
app.use('/api/recipes', recipeRoutes);
const favoriteRoutes = require("./routes/favoriteRoutes");
app.use("/api/favorites", favoriteRoutes);
app.use("/uploads", express.static("uploads"));
// Démarrage serveur
const PORT = process.env.PORT || 3000;
connectDB();
app.listen(PORT, () => {
  console.log(`✅ Serveur démarré sur http://localhost:${PORT}`);
});
