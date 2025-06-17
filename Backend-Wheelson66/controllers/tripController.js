// controllers/tripController.js
const Trip = require('../models/Trip');

const generateItems = (people, rentCar) => {
  const baseItems = [
    { name: 'Serviette', quantity: people },
    { name: 'Brosse à dents', quantity: people },
    { name: 'Chaussures', quantity: people },
    { name: 'Crème solaire', quantity: 1 },
    { name: 'Sac à dos', quantity: people },
    { name: 'Snacks', quantity: 1 },
  ];

  if (rentCar) {
    baseItems.push({ name: 'Permis de conduire', quantity: 1 });
  }

  return baseItems;
};

exports.createTrip = async (req, res) => {
  try {
    const { destination, days, people, rentCar, departureCountry, departureDate } = req.body;
    const items = generateItems(people, rentCar);

    const trip = await Trip.create({
      user: req.user.id,
      destination,
      days,
      people,
      rentCar,
      departureCountry,
      departureDate,
      items,
    });

    res.status(201).json({ trip });
  } catch (err) {
    res.status(500).json({ message: 'Erreur création voyage', error: err.message });
  }
};
// controllers/tripController.js (suite)
exports.updatePrices = async (req, res) => {
  try {
    const { tripId, items } = req.body;

    const trip = await Trip.findById(tripId);
    if (!trip) return res.status(404).json({ message: 'Voyage introuvable' });

    // mise à jour des prix
    trip.items = trip.items.map((item) => {
      const found = items.find((i) => i.name === item.name);
      return {
        ...item._doc,
        price: found ? found.price : item.price,
      };
    });

    // calcul budget
    trip.totalBudget = trip.items.reduce((acc, item) => acc + item.price * item.quantity, 0);

    await trip.save();

    res.json({ message: 'Budget mis à jour', trip });
  } catch (err) {
    res.status(500).json({ message: 'Erreur mise à jour budget', error: err.message });
  }
};
// controllers/tripController.js

exports.getLatestTrip = async (req, res) => {
  try {
    const trip = await Trip.findOne({ user: req.user.id }).sort({ createdAt: -1 });

    if (!trip) return res.status(404).json({ message: 'Aucun voyage trouvé' });

    res.json({ trip });
  } catch (err) {
    res.status(500).json({ message: 'Erreur récupération voyage', error: err.message });
  }
};