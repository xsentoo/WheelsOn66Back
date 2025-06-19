const mongoose = require('mongoose');
const dotenv = require('dotenv');
const Destination = require('../models/Destination');

dotenv.config();

const destinations = [
  { name: "États-Unis'", description: "Une pays magnifique" },
  { name: "Route 66", description: "Un road trip mythique à travers les États-Unis"  ,backgroundImageUrl: "https://images.unsplash.com/photo-1519608487953-e999c86e7455?auto=format&fit=crop&w=1200&q=80"},
  { name: "Sri Lanka", description: "Une île tropicale magnifique" },
  { name: "Las Vegas", description: "La ville du divertissement" },
  { name: "Maroc", description: "Entre désert, montagnes et culture" },
  { name: "Japon", description: "Modernité et tradition japonaise" },
  { name: "New York", description: "La ville qui ne dort jamais" },
  { name: "Bali", description: "L'île des Dieux et des plages de rêve" },
  { name: "Thaïlande", description: "Plages, temples et street-food" },
  { name: "Londres", description: "Culture, histoire et pubs anglais" },
  { name: "Rome", description: "Histoire et gastronomie italienne" },
  { name: "Barcelone", description: "Art, plage et tapas espagnols" },
  { name: "Istanbul", description: "Entre Orient et Occident" },
  { name: "Grèce", description: "Îles, mythologie et cuisine méditerranéenne" },
  { name: "Australie", description: "Aventure, surf et kangourous" },
  { name: "Cap-Vert", description: "Archipel africain au charme volcanique" },
  { name: "Maldives", description: "Plages de sable blanc et eaux turquoise" },
  { name: "Ile Maurice", description: "Nature luxuriante et plages paradisiaques" },
  { name: "Canada", description: "Grandes villes et espaces sauvages" },
  { name: "Islande", description: "Terre de glace, volcans et aurores boréales" },
  { name: "Egypte", description: "Pyramides et mystères du Nil" },
  { name: "Dubaï", description: "Luxe, innovation et désert" },
  { name: "Mexique", description: "Ruines mayas et plages de rêve" },
  { name: "Afrique du Sud", description: "Safari, ville du Cap et nature sauvage" },
  { name: "Portugal", description: "Lisbonne, Porto et plages de l'Algarve" },
  { name: "Vietnam", description: "Paysages, culture et cuisine raffinée" },
  { name: "Singapour", description: "Ville-État ultramoderne en Asie" },
  { name: "Floride", description: "Miami, parcs d'attractions et soleil" },
  { name: "Pérou", description: "Machu Picchu et trésors incas" },
  { name: "Brésil", description: "Rio, carnaval et plages infinies" },
  { name: "Norvège", description: "Fjords et nature spectaculaire" },
  { name: "Chine", description: "Grande Muraille et traditions millénaires" },
  { name: "Suisse", description: "Montagnes, lacs et chocolat" },
  { name: "Inde", description: "Pays des couleurs et du Taj Mahal" },
  { name: "Hawaï", description: "Surf, volcans et plages exotiques" },
  { name: "Costa Rica", description: "Biodiversité et nature exubérante" },
  { name: "Tanzanie", description: "Safari, Kilimandjaro et Zanzibar" },
  { name: "Malaisie", description: "Îles paradisiaques et jungles denses" },
  { name: "Los Angeles", description: "Hollywood, plages et culture US" },
  { name: "Amsterdam", description: "Canaux, vélos et ambiance bohème" },
  { name: "Turquie", description: "Plages, Istanbul et Cappadoce" }
];

const seed = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI);
    await Destination.deleteMany(); // pour éviter les doublons
    await Destination.insertMany(destinations);
    console.log("✅ Destinations insérées !");
    process.exit();
  } catch (error) {
    console.error("❌ Erreur :", error.message);
    process.exit(1);
  }
};

seed();