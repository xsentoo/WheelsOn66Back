const express = require('express');
const dotenv = require('dotenv');
const cors = require('cors');
const connectDB = require('./config/db');

dotenv.config();

const app = express();

// Connexion à la base MongoDB
connectDB();

// Middleware
app.use(cors());
app.use(express.json());

// Routes API (toutes tes routes)
app.use('/api/auth', require('./routes/authRoutes'));
app.use('/api/home', require('./routes/homeRoutes'));
app.use('/api/trips', require('./routes/tripRoutes'));
app.use('/api/items', require('./routes/itemRoutes'));
app.use('/api/destinations', require('./routes/destinationRoutes'));
app.use('/api/roadtrips', require('./routes/roadTripRoutes'));
app.use('/api/user', require('./routes/userRoutes')); // <-- LIGNE OBLIGATOIRE pour le profil

// Lancement du serveur
const PORT = process.env.PORT || 5001;
app.listen(PORT, () => {
  console.log(`🚀 Server running on port ${PORT}`);
});