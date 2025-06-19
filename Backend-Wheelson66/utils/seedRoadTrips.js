const mongoose = require('mongoose');
const RoadTrip = require('../models/RoadTrip');
require('dotenv').config();

const roadTrips = [
  // États-Unis : Route 66 & Pacific Coast Highway
  {
    destination: 'États-Unis',
    name: 'Route 66',
    description: 'De Chicago à Santa Monica à travers les USA.',
    stops: [
      { name: "Chicago", description: "Départ" },
      { name: "St. Louis" },
      { name: "Oklahoma City" },
      { name: "Albuquerque" },
      { name: "Flagstaff" },
      { name: "Santa Monica", description: "Arrivée" }
    ]
  },
  {
    destination: 'États-Unis',
    name: 'Pacific Coast Highway',
    description: 'La mythique route de la côte Ouest, de San Francisco à Los Angeles.',
    stops: [
      { name: "San Francisco" },
      { name: "Santa Cruz" },
      { name: "Monterey" },
      { name: "Big Sur" },
      { name: "Santa Barbara" },
      { name: "Los Angeles" }
    ]
  },

  // Sri Lanka : Boucle du Triangle Culturel
  {
    destination: 'Sri Lanka',
    name: 'Triangle Culturel',
    description: "Circuit au cœur du Sri Lanka ancien : Sigiriya, Dambulla, Polonnaruwa...",
    stops: [
      { name: "Kandy" },
      { name: "Dambulla" },
      { name: "Sigiriya" },
      { name: "Polonnaruwa" },
      { name: "Anuradhapura" }
    ]
  },

  // Maroc : Marrakech-Sahara
  {
    destination: 'Maroc',
    name: 'Route Marrakech - Sahara',
    description: "Traverse l'Atlas jusqu'aux dunes du désert.",
    stops: [
      { name: "Marrakech" },
      { name: "Ouarzazate" },
      { name: "Boumalne Dadès" },
      { name: "Merzouga (Sahara)" }
    ]
  },

  // Japon : Tokyo-Kyoto-Osaka
  {
    destination: 'Japon',
    name: 'Tokyo - Kyoto - Osaka',
    description: "Le Japon classique, de la capitale moderne à l'ancienne capitale.",
    stops: [
      { name: "Tokyo" },
      { name: "Hakone" },
      { name: "Nagoya" },
      { name: "Kyoto" },
      { name: "Osaka" }
    ]
  },

  // Ajoute d'autres road trips pour tes autres destinations si tu veux !
];

async function seed() {
  try {
    await mongoose.connect(process.env.MONGO_URI);
    await RoadTrip.deleteMany(); // pour éviter les doublons
    await RoadTrip.insertMany(roadTrips);
    console.log("✅ Road trips insérés !");
    process.exit();
  } catch (err) {
    console.error("❌ Erreur :", err.message);
    process.exit(1);
  }
}

seed();