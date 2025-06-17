// routes/itemRoutes.js

const express = require('express');
const router = express.Router();
const ItemSuggestion = require('../models/ItemSuggestion');

// Obtenir toutes les destinations disponibles
router.get('/', async (req, res) => {
  try {
    const destinations = await ItemSuggestion.find().select('destination -_id');
    // On renvoie un tableau simple ["Route 66", "Sri Lanka", ...]
    res.json(destinations.map(d => d.destination));
  } catch (err) {
    res.status(500).json({ message: 'Erreur serveur', error: err.message });
  }
});

// Obtenir les suggestions d'items pour une destination donnée
router.get('/:destination', async (req, res) => {
  try {
    // On cherche UNE seule suggestion correspondant à la destination
    const suggestion = await ItemSuggestion.findOne({ destination: req.params.destination });
    if (!suggestion) {
      return res.status(404).json({ message: "Pas de suggestion pour cette destination" });
    }
    res.json(suggestion.items);
  } catch (err) {
    res.status(500).json({ message: 'Erreur serveur', error: err.message });
  }
});

module.exports = router;