const mongoose = require('mongoose');

// Sous-schéma pour les items du voyage
const itemSchema = new mongoose.Schema({
  name: { type: String, required: true },
  quantity: { type: Number, default: 1 },
  price: { type: Number, default: 0 },
}, { _id: false });

const stopSchema = new mongoose.Schema({
  name: String,
  latitude: Number,
  longitude: Number,
}, { _id: false });

const tripSchema = new mongoose.Schema({
  user: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  destination: { type: String, required: true },
  days: { type: Number, required: true },
  people: { type: Number, required: true },
  rentCar: { type: Boolean, default: false },
  departureCountry: String,
  departureDate: Date,
  items: [itemSchema],
  totalBudget: { type: Number, default: 0 },
  roadTripId: { type: mongoose.Schema.Types.ObjectId, ref: 'RoadTrip' },
  customStops: [stopSchema], // <-- ici le champ pour les étapes personnalisées
}, { timestamps: true });

module.exports = mongoose.model('Trip', tripSchema);