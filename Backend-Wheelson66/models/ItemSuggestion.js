const mongoose = require('mongoose');

const itemSchema = new mongoose.Schema({
  destination: { type: String, required: true },
  items: [
    {
      name: String,
      quantity: Number,
      quantityPerPerson: Number
    }
  ]
});

module.exports = mongoose.model('ItemSuggestion', itemSchema);