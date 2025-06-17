// models/Trip.js
const mongoose = require('mongoose');

const itemSchema = new mongoose.Schema({
  name: String,
  quantity: Number,
  price: { type: Number, default: 0 },
});

const tripSchema = new mongoose.Schema({
  user: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
  destination: String,
  days: Number,
  people: Number,
  rentCar: Boolean,
  departureCountry: String,
  departureDate: Date,
  items: [itemSchema],
  totalBudget: { type: Number, default: 0 }
}, { timestamps: true });

module.exports = mongoose.model('Trip', tripSchema);