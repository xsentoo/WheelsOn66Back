const mongoose = require('mongoose');

const stopSchema = new mongoose.Schema({
  name:        { type: String, required: true },
  description: String,
  imageUrl:    String,
  coordinates: {
    lat: Number,
    lng: Number
  }
}, { _id: false });

const roadTripSchema = new mongoose.Schema({
  destination:  { type: String, required: true }, // ex: "États-Unis"
  name:         { type: String, required: true }, // ex: "Route 66"
  description:  String,
  mapImageUrl:  String,                           // Image globale de la route
  stops:        [stopSchema]                      // Étapes/arrêts sur la route
});

module.exports = mongoose.model('RoadTrip', roadTripSchema);