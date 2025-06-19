const express = require('express');
const router = express.Router();
const RoadTrip = require('../models/RoadTrip');

// GET /api/roadtrips?destination=États-Unis
router.get('/', async (req, res) => {
  try {
    const { destination } = req.query;
    if (!destination) {
      return res.status(400).json({ message: 'Destination requise dans la query' });
    }
    const trips = await RoadTrip.find({ destination });
    res.json(trips);
  } catch (err) {
    res.status(500).json({ message: 'Erreur serveur', error: err.message });
  }
});

// GET /api/roadtrips/:id — Détails d’un road trip précis
router.get('/:id', async (req, res) => {
  try {
    const trip = await RoadTrip.findById(req.params.id);
    if (!trip) return res.status(404).json({ message: 'Road trip non trouvé' });
    res.json(trip);
  } catch (err) {
    res.status(500).json({ message: 'Erreur serveur', error: err.message });
  }
});

module.exports = router;