// models/User.js
const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  name:     { type: String, required: true },
  email:    { type: String, required: true, unique: true },
  password: { type: String, required: true },

  // Champs utiles si tu veux faire une vérification d'email plus tard
  isVerified:       { type: Boolean, default: false },
  verificationCode: { type: String },
}, { timestamps: true });

module.exports = mongoose.model('User', userSchema);