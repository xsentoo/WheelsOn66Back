const express = require('express');
const router = express.Router();
const authMiddleware = require('../middleware/authMiddleware');
const Trip = require('../models/Trip');
const ItemSuggestion = require('../models/ItemSuggestion'); // <-- AJOUT ICI

// ✅ Créer un voyage
router.post('/plan', authMiddleware, async (req, res) => {
  try {
    const { destination, days, people, rentCar, departure } = req.body;

    // Chercher la suggestion d'items pour la destination choisie
    const suggestion = await ItemSuggestion.findOne({ destination });
    let items = [];
    if (suggestion) {
      // Générer la liste d'items avec la bonne quantité
      items = suggestion.items.map(item => ({
        name: item.name,
        quantity: item.quantityPerPerson
          ? item.quantityPerPerson * people
          : (item.quantity || 1),
        price: 0
      }));
    }

    const trip = new Trip({
      user: req.user.id,
      destination,
      days,
      people,
      rentCar,
      departure,
      items // <-- On ajoute les items à la création du voyage !
    });

    await trip.save();

    res.status(201).json({ message: 'Voyage enregistré', trip });
  } catch (error) {
    res.status(500).json({ message: 'Erreur serveur', error: error.message });
  }
});

// ✅ Récupérer le dernier voyage
router.get('/latest', authMiddleware, async (req, res) => {
  try {
    const trip = await Trip.findOne({ user: req.user.id }).sort({ createdAt: -1 });

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

module.exports = router;