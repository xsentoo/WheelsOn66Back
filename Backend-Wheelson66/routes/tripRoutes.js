const express = require('express');
const router = express.Router();
const authMiddleware = require('../middleware/authMiddleware');
const Trip = require('../models/Trip');
const ItemSuggestion = require('../models/ItemSuggestion');
const RoadTrip = require('../models/RoadTrip'); // AJOUT ICI

// ✅ Créer un voyage
router.post('/plan', authMiddleware, async (req, res) => {
  try {
    const { destination, days, people, rentCar, departure, roadTripId } = req.body;

    // Suggestion d'items pour la destination choisie
    const suggestion = await ItemSuggestion.findOne({ destination });
    let items = [];
    if (suggestion) {
      items = suggestion.items.map(item => ({
        name: item.name,
        quantity: item.quantityPerPerson
          ? item.quantityPerPerson * people
          : (item.quantity || 1),
        price: 0
      }));
    }

    // ENREGISTRE BIEN le roadTripId
    const trip = new Trip({
      user: req.user.id,
      destination,
      days,
      people,
      rentCar,
      departureCountry: departure,
      roadTripId: roadTripId || null,
      items
    });

    await trip.save();

    res.status(201).json({ message: 'Voyage enregistré', trip });
  } catch (error) {
    res.status(500).json({ message: 'Erreur serveur', error: error.message });
  }
});

// ✅ Récupérer le dernier voyage AVEC le roadTrip associé (si existant)
router.get('/latest', authMiddleware, async (req, res) => {
  try {
    // On popule le champ roadTripId automatiquement !
    const trip = await Trip.findOne({ user: req.user.id })
      .sort({ createdAt: -1 })
      .populate('roadTripId'); // Ça met le roadTrip directement dans trip.roadTripId

    if (!trip) return res.status(404).json({ message: "Aucun voyage trouvé" });

    res.json({ trip });
  } catch (error) {
    res.status(500).json({ message: 'Erreur serveur', error: error.message });
  }
});

// ✅ Mettre à jour le dernier voyage (items ou budget)
router.put('/latest', authMiddleware, async (req, res) => {
  try {
    const trip = await Trip.findOne({ user: req.user.id }).sort({ createdAt: -1 });

    if (!trip) return res.status(404).json({ message: "Aucun voyage trouvé" });

    // Mise à jour des champs si fournis
    if (req.body.items) trip.items = req.body.items;
    if (req.body.totalBudget !== undefined) trip.totalBudget = req.body.totalBudget;

    await trip.save();
    res.json({ message: 'Voyage mis à jour', trip });
  } catch (error) {
    res.status(500).json({ message: 'Erreur serveur', error: error.message });
  }
});
// ✅ Sauvegarder les étapes personnalisées du road trip dans le dernier voyage de l'utilisateur
router.put('/latest/stops', authMiddleware, async (req, res) => {
  try {
    const { stops } = req.body;
    const trip = await Trip.findOne({ user: req.user.id }).sort({ createdAt: -1 });

    if (!trip) return res.status(404).json({ message: 'Aucun voyage trouvé' });

    // On sauvegarde dans le champ customStops
    trip.customStops = stops;
    await trip.save();

    res.json({ message: "Étapes personnalisées enregistrées", trip });
  } catch (error) {
    res.status(500).json({ message: "Erreur serveur", error: error.message });
  }
});

// ATTENTION : Un seul module.exports à la fin !
module.exports = router;