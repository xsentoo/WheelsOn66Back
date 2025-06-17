const mongoose = require('mongoose');
const dotenv = require('dotenv');
const ItemSuggestion = require('../models/ItemSuggestion');

dotenv.config();

const suggestions = [
  {
    destination: 'Route 66',
    items: [
      { name: 'Billet de voyage', quantityPerPerson: 1 },
      { name: 'Carte routière', quantity: 1 },
      { name: 'Appareil photo', quantity: 1 },
      { name: 'Serviette', quantityPerPerson: 1 },
      { name: 'Crème solaire', quantityPerPerson: 1 },
      { name: 'Lunettes de soleil', quantityPerPerson: 1 },
      { name: 'Gourde', quantityPerPerson: 1 },
      { name: 'Snacks', quantityPerPerson: 3 },
      { name: 'Batterie externe', quantity: 1 },
      { name: 'Chargeur allume-cigare', quantity: 1 },
      { name: 'Casquette', quantityPerPerson: 1 },
      { name: 'Trousse de secours', quantity: 1 },
      { name: 'Guide touristique USA', quantity: 1 },
      { name: 'Coussin de voyage', quantityPerPerson: 1 },
      { name: 'Couverture', quantity: 1 }
    ]
  },
  {
    destination: 'Sri Lanka',
    items: [
      { name: 'Billet de voyage', quantityPerPerson: 1 },
      { name: 'Anti-moustique', quantityPerPerson: 1 },
      { name: 'Maillot de bain', quantityPerPerson: 1 },
      { name: 'Serviette', quantityPerPerson: 1 },
      { name: 'Guide touristique', quantity: 1 },
      { name: 'Crème solaire', quantityPerPerson: 1 },
      { name: 'Chapeau', quantityPerPerson: 1 },
      { name: 'Tongs', quantityPerPerson: 1 },
      { name: 'Sac étanche', quantity: 1 },
      { name: 'Lunettes de soleil', quantityPerPerson: 1 },
      { name: 'Bouteille filtrante', quantity: 1 },
      { name: 'Gels hydroalcoolique', quantityPerPerson: 1 },
      { name: 'Médicaments de base', quantity: 1 },
      { name: 'Vêtements légers', quantityPerPerson: 3 },
      { name: 'Poncho pluie', quantity: 1 }
    ]
  },
  {
    destination: 'Las Vegas',
    items: [
      { name: 'Tenue de soirée', quantityPerPerson: 1 },
      { name: 'Lunettes de soleil', quantityPerPerson: 1 },
      { name: 'Billet de voyage', quantityPerPerson: 1 },
      { name: 'Serviette', quantityPerPerson: 1 },
      { name: 'Crème solaire', quantityPerPerson: 1 },
      { name: 'Maquillage', quantity: 1 },
      { name: 'Rasoir électrique', quantity: 1 },
      { name: 'Chaussures élégantes', quantityPerPerson: 1 },
      { name: 'Vêtements confort', quantityPerPerson: 2 },
      { name: 'Déodorant', quantityPerPerson: 1 },
      { name: 'Chargeur', quantity: 1 },
      { name: 'Powerbank', quantity: 1 },
      { name: 'Appareil photo', quantity: 1 },
      { name: 'Guide de la ville', quantity: 1 },
      { name: 'Tickets de spectacles', quantity: 1 }
    ]
  },
  {
    destination: 'Maroc',
    items: [
      { name: 'Passeport', quantityPerPerson: 1 },
      { name: 'Billet d’avion', quantityPerPerson: 1 },
      { name: 'Crème solaire', quantityPerPerson: 1 },
      { name: 'Lunettes de soleil', quantityPerPerson: 1 },
      { name: 'Chapeau', quantityPerPerson: 1 },
      { name: 'Écharpe légère', quantityPerPerson: 1 },
      { name: 'Sandales', quantityPerPerson: 1 },
      { name: 'Vêtements amples', quantityPerPerson: 2 },
      { name: 'Maillot de bain', quantityPerPerson: 1 },
      { name: 'Guide Maroc', quantity: 1 },
      { name: 'Médicaments digestifs', quantity: 1 },
      { name: 'Trousse de secours', quantity: 1 },
      { name: 'Chargeur', quantity: 1 },
      { name: 'Appareil photo', quantity: 1 },
      { name: 'Cadenas valise', quantity: 1 }
    ]
  },
  {
    destination: 'Japon',
    items: [
      { name: 'Passeport', quantityPerPerson: 1 },
      { name: 'Billet d’avion', quantityPerPerson: 1 },
      { name: 'Adaptateur prise japonaise', quantity: 1 },
      { name: 'Yen japonais', quantity: 1 },
      { name: 'Guide touristique Japon', quantity: 1 },
      { name: 'Carte Suica/Pasmo', quantity: 1 },
      { name: 'Masque', quantityPerPerson: 2 },
      { name: 'Appareil photo', quantity: 1 },
      { name: 'Parapluie compact', quantity: 1 },
      { name: 'Vêtements adaptés saison', quantityPerPerson: 3 },
      { name: 'Trousse de toilette', quantity: 1 },
      { name: 'Chapeau', quantityPerPerson: 1 },
      { name: 'Crème solaire', quantityPerPerson: 1 },
      { name: 'Powerbank', quantity: 1 },
      { name: 'Livres ou manga', quantity: 1 }
    ]
  },
  {
  destination: 'New York',
  items: [
    { name: 'Passeport', quantityPerPerson: 1 },
    { name: 'Billet d’avion', quantityPerPerson: 1 },
    { name: 'Adaptateur US', quantity: 1 },
    { name: 'Dollars', quantity: 1 },
    { name: 'Guide New York', quantity: 1 },
    { name: 'Tickets métro', quantity: 1 },
    { name: 'Appareil photo', quantity: 1 },
    { name: 'Bonnes chaussures', quantityPerPerson: 1 },
    { name: 'Vêtements adaptés météo', quantityPerPerson: 3 },
    { name: 'Trousse de toilette', quantity: 1 },
    { name: 'Sac à dos de jour', quantity: 1 },
    { name: 'Powerbank', quantity: 1 },
    { name: 'Lunettes de soleil', quantityPerPerson: 1 },
    { name: 'Parapluie compact', quantity: 1 },
    { name: 'Crème solaire', quantityPerPerson: 1 }
  ]
},
{
  destination: 'Bali',
  items: [
    { name: 'Passeport', quantityPerPerson: 1 },
    { name: 'Visa', quantityPerPerson: 1 },
    { name: 'Maillot de bain', quantityPerPerson: 1 },
    { name: 'Sandales', quantityPerPerson: 1 },
    { name: 'Crème solaire', quantityPerPerson: 1 },
    { name: 'Anti-moustique', quantityPerPerson: 1 },
    { name: 'Lunettes de soleil', quantityPerPerson: 1 },
    { name: 'Snorkel/masque', quantity: 1 },
    { name: 'Paréo', quantityPerPerson: 1 },
    { name: 'Sac étanche', quantity: 1 },
    { name: 'Gourde', quantityPerPerson: 1 },
    { name: 'Chapeau', quantityPerPerson: 1 },
    { name: 'Vêtements légers', quantityPerPerson: 4 },
    { name: 'Trousse de secours', quantity: 1 },
    { name: 'Powerbank', quantity: 1 }
  ]
},
{
  destination: 'Thaïlande',
  items: [
    { name: 'Passeport', quantityPerPerson: 1 },
    { name: 'Visa Thaïlande', quantityPerPerson: 1 },
    { name: 'Maillot de bain', quantityPerPerson: 1 },
    { name: 'Crème solaire', quantityPerPerson: 1 },
    { name: 'Anti-moustique', quantityPerPerson: 1 },
    { name: 'Sandales', quantityPerPerson: 1 },
    { name: 'Lunettes de soleil', quantityPerPerson: 1 },
    { name: 'Chapeau', quantityPerPerson: 1 },
    { name: 'Poncho pluie', quantity: 1 },
    { name: 'Guide Thaïlande', quantity: 1 },
    { name: 'Vêtements légers', quantityPerPerson: 4 },
    { name: 'Sac à dos de jour', quantity: 1 },
    { name: 'Trousse de pharmacie', quantity: 1 },
    { name: 'Powerbank', quantity: 1 },
    { name: 'Cadenas valise', quantity: 1 }
  ]
},
{
  destination: 'Londres',
  items: [
    { name: 'Passeport/Carte identité', quantityPerPerson: 1 },
    { name: 'Billet Eurostar/avion', quantityPerPerson: 1 },
    { name: 'Adaptateur UK', quantity: 1 },
    { name: 'Carte bancaire', quantity: 1 },
    { name: 'Guide Londres', quantity: 1 },
    { name: 'Tickets transport', quantity: 1 },
    { name: 'Vêtements pluie', quantityPerPerson: 1 },
    { name: 'Parapluie compact', quantity: 1 },
    { name: 'Bonnes chaussures', quantityPerPerson: 1 },
    { name: 'Appareil photo', quantity: 1 },
    { name: 'Powerbank', quantity: 1 },
    { name: 'Sac à dos', quantity: 1 },
    { name: 'Trousse de toilette', quantity: 1 },
    { name: 'Pull chaud', quantityPerPerson: 1 },
    { name: 'Plan du métro', quantity: 1 }
  ]
},
{
  destination: 'Rome',
  items: [
    { name: 'Passeport/Carte identité', quantityPerPerson: 1 },
    { name: 'Billet avion/train', quantityPerPerson: 1 },
    { name: 'Guide Rome', quantity: 1 },
    { name: 'Appareil photo', quantity: 1 },
    { name: 'Carte bancaire', quantity: 1 },
    { name: 'Chapeau', quantityPerPerson: 1 },
    { name: 'Lunettes de soleil', quantityPerPerson: 1 },
    { name: 'Crème solaire', quantityPerPerson: 1 },
    { name: 'Vêtements confort', quantityPerPerson: 3 },
    { name: 'Sandales', quantityPerPerson: 1 },
    { name: 'Powerbank', quantity: 1 },
    { name: 'Trousse de toilette', quantity: 1 },
    { name: 'Plan de Rome', quantity: 1 },
    { name: 'Guide gastronomique', quantity: 1 },
    { name: 'Sac à dos', quantity: 1 }
  ]
},
{
  destination: 'Barcelone',
  items: [
    { name: 'Passeport/Carte identité', quantityPerPerson: 1 },
    { name: 'Billet avion/train', quantityPerPerson: 1 },
    { name: 'Guide Barcelone', quantity: 1 },
    { name: 'Appareil photo', quantity: 1 },
    { name: 'Maillot de bain', quantityPerPerson: 1 },
    { name: 'Crème solaire', quantityPerPerson: 1 },
    { name: 'Sandales', quantityPerPerson: 1 },
    { name: 'Vêtements légers', quantityPerPerson: 3 },
    { name: 'Powerbank', quantity: 1 },
    { name: 'Trousse de secours', quantity: 1 },
    { name: 'Chapeau', quantityPerPerson: 1 },
    { name: 'Lunettes de soleil', quantityPerPerson: 1 },
    { name: 'Plan du métro', quantity: 1 },
    { name: 'Sac à dos', quantity: 1 },
    { name: 'Serviette de plage', quantityPerPerson: 1 }
  ]
},
{
  destination: 'Istanbul',
  items: [
    { name: 'Passeport', quantityPerPerson: 1 },
    { name: 'Visa Turquie', quantityPerPerson: 1 },
    { name: 'Billet avion', quantityPerPerson: 1 },
    { name: 'Guide Istanbul', quantity: 1 },
    { name: 'Appareil photo', quantity: 1 },
    { name: 'Foulard (pour visiter mosquées)', quantityPerPerson: 1 },
    { name: 'Chaussures confort', quantityPerPerson: 1 },
    { name: 'Powerbank', quantity: 1 },
    { name: 'Trousse de secours', quantity: 1 },
    { name: 'Lunettes de soleil', quantityPerPerson: 1 },
    { name: 'Vêtements adaptés', quantityPerPerson: 3 },
    { name: 'Crème solaire', quantityPerPerson: 1 },
    { name: 'Parapluie compact', quantity: 1 },
    { name: 'Cadenas valise', quantity: 1 },
    { name: 'Chapeau', quantityPerPerson: 1 }
  ]
},
{
  destination: 'Grèce',
  items: [
    { name: 'Passeport/Carte identité', quantityPerPerson: 1 },
    { name: 'Billet avion', quantityPerPerson: 1 },
    { name: 'Guide Grèce', quantity: 1 },
    { name: 'Appareil photo', quantity: 1 },
    { name: 'Maillot de bain', quantityPerPerson: 1 },
    { name: 'Sandales', quantityPerPerson: 1 },
    { name: 'Chapeau', quantityPerPerson: 1 },
    { name: 'Crème solaire', quantityPerPerson: 1 },
    { name: 'Trousse de secours', quantity: 1 },
    { name: 'Vêtements légers', quantityPerPerson: 3 },
    { name: 'Powerbank', quantity: 1 },
    { name: 'Paréo', quantityPerPerson: 1 },
    { name: 'Lunettes de soleil', quantityPerPerson: 1 },
    { name: 'Guide des îles', quantity: 1 },
    { name: 'Livres', quantity: 1 }
  ]
},
{
  destination: 'Australie',
  items: [
    { name: 'Passeport', quantityPerPerson: 1 },
    { name: 'Visa Australie', quantityPerPerson: 1 },
    { name: 'Billet avion', quantityPerPerson: 1 },
    { name: 'Crème solaire', quantityPerPerson: 1 },
    { name: 'Maillot de bain', quantityPerPerson: 1 },
    { name: 'Chapeau', quantityPerPerson: 1 },
    { name: 'Appareil photo', quantity: 1 },
    { name: 'Powerbank', quantity: 1 },
    { name: 'Trousse de secours', quantity: 1 },
    { name: 'Médicaments spécifiques', quantity: 1 },
    { name: 'Adaptateur australien', quantity: 1 },
    { name: 'Guide Australie', quantity: 1 },
    { name: 'Sac étanche', quantity: 1 },
    { name: 'Vêtements été/hiver', quantityPerPerson: 3 },
    { name: 'Couteau multifonction', quantity: 1 }
  ]
},
{
  destination: 'Cap-Vert',
  items: [
    { name: 'Passeport', quantityPerPerson: 1 },
    { name: 'Billet avion', quantityPerPerson: 1 },
    { name: 'Visa Cap-Vert', quantityPerPerson: 1 },
    { name: 'Maillot de bain', quantityPerPerson: 1 },
    { name: 'Serviette de plage', quantityPerPerson: 1 },
    { name: 'Crème solaire', quantityPerPerson: 1 },
    { name: 'Chapeau', quantityPerPerson: 1 },
    { name: 'Lunettes de soleil', quantityPerPerson: 1 },
    { name: 'Gourde', quantityPerPerson: 1 },
    { name: 'Guide Cap-Vert', quantity: 1 },
    { name: 'Trousse de secours', quantity: 1 },
    { name: 'Vêtements légers', quantityPerPerson: 3 },
    { name: 'Sandales', quantityPerPerson: 1 },
    { name: 'Powerbank', quantity: 1 },
    { name: 'Livres', quantity: 1 }
  ]
},
{
  destination: 'Maldives',
  items: [
    { name: 'Passeport', quantityPerPerson: 1 },
    { name: 'Billet d’avion', quantityPerPerson: 1 },
    { name: 'Crème solaire', quantityPerPerson: 1 },
    { name: 'Maillot de bain', quantityPerPerson: 2 },
    { name: 'Sandales', quantityPerPerson: 1 },
    { name: 'Chapeau', quantityPerPerson: 1 },
    { name: 'Lunettes de soleil', quantityPerPerson: 1 },
    { name: 'Robe légère', quantityPerPerson: 2 },
    { name: 'Tongs', quantityPerPerson: 1 },
    { name: 'Serviette de plage', quantityPerPerson: 1 },
    { name: 'Trousse de premiers secours', quantity: 1 },
    { name: 'Guide Maldives', quantity: 1 },
    { name: 'Gourde', quantityPerPerson: 1 },
    { name: 'Powerbank', quantity: 1 },
    { name: 'Livres', quantity: 1 }
  ]
},
{
  destination: 'Ile Maurice',
  items: [
    { name: 'Passeport', quantityPerPerson: 1 },
    { name: 'Billet d’avion', quantityPerPerson: 1 },
    { name: 'Maillot de bain', quantityPerPerson: 1 },
    { name: 'Crème solaire', quantityPerPerson: 1 },
    { name: 'Chapeau', quantityPerPerson: 1 },
    { name: 'Lunettes de soleil', quantityPerPerson: 1 },
    { name: 'Shorts', quantityPerPerson: 2 },
    { name: 'Sandales', quantityPerPerson: 1 },
    { name: 'Répulsif moustique', quantityPerPerson: 1 },
    { name: 'Serviette de plage', quantityPerPerson: 1 },
    { name: 'Trousse de premiers secours', quantity: 1 },
    { name: 'Vêtements légers', quantityPerPerson: 4 },
    { name: 'Guide Ile Maurice', quantity: 1 },
    { name: 'Gourde', quantityPerPerson: 1 },
    { name: 'Livres', quantity: 1 }
  ]
},
{
  destination: 'Canada',
  items: [
    { name: 'Passeport', quantityPerPerson: 1 },
    { name: 'Billet d’avion', quantityPerPerson: 1 },
    { name: 'ESTA/AVE', quantityPerPerson: 1 },
    { name: 'Manteau chaud', quantityPerPerson: 1 },
    { name: 'Bonnet', quantityPerPerson: 1 },
    { name: 'Gants', quantityPerPerson: 1 },
    { name: 'Pulls', quantityPerPerson: 2 },
    { name: 'Appareil photo', quantity: 1 },
    { name: 'Guide Canada', quantity: 1 },
    { name: 'Powerbank', quantity: 1 },
    { name: 'Carte bancaire', quantity: 1 },
    { name: 'Bottes', quantityPerPerson: 1 },
    { name: 'Lunettes de soleil', quantityPerPerson: 1 },
    { name: 'Vêtements chauds', quantityPerPerson: 3 },
    { name: 'Écharpe', quantityPerPerson: 1 }
  ]
},
{
  destination: 'Islande',
  items: [
    { name: 'Passeport', quantityPerPerson: 1 },
    { name: 'Billet d’avion', quantityPerPerson: 1 },
    { name: 'Veste imperméable', quantityPerPerson: 1 },
    { name: 'Bonnet', quantityPerPerson: 1 },
    { name: 'Gants', quantityPerPerson: 1 },
    { name: 'Pulls chauds', quantityPerPerson: 2 },
    { name: 'Maillot de bain (sources chaudes)', quantityPerPerson: 1 },
    { name: 'Appareil photo', quantity: 1 },
    { name: 'Powerbank', quantity: 1 },
    { name: 'Lunettes de soleil', quantityPerPerson: 1 },
    { name: 'Écharpe', quantityPerPerson: 1 },
    { name: 'Crampons chaussures', quantity: 1 },
    { name: 'Vêtements techniques', quantityPerPerson: 2 },
    { name: 'Guide Islande', quantity: 1 },
    { name: 'Carte bancaire', quantity: 1 }
  ]
},
{
  destination: 'Egypte',
  items: [
    { name: 'Passeport', quantityPerPerson: 1 },
    { name: 'Visa Égypte', quantityPerPerson: 1 },
    { name: 'Billet d’avion', quantityPerPerson: 1 },
    { name: 'Chapeau', quantityPerPerson: 1 },
    { name: 'Crème solaire', quantityPerPerson: 1 },
    { name: 'Lunettes de soleil', quantityPerPerson: 1 },
    { name: 'Foulard', quantityPerPerson: 1 },
    { name: 'Vêtements longs', quantityPerPerson: 3 },
    { name: 'Appareil photo', quantity: 1 },
    { name: 'Guide Égypte', quantity: 1 },
    { name: 'Gourde', quantityPerPerson: 1 },
    { name: 'Trousse de premiers secours', quantity: 1 },
    { name: 'Livres', quantity: 1 },
    { name: 'Sandales', quantityPerPerson: 1 },
    { name: 'Carte bancaire', quantity: 1 }
  ]
},
{
  destination: 'Dubaï',
  items: [
    { name: 'Passeport', quantityPerPerson: 1 },
    { name: 'Billet d’avion', quantityPerPerson: 1 },
    { name: 'Visa Dubaï', quantityPerPerson: 1 },
    { name: 'Vêtements légers', quantityPerPerson: 3 },
    { name: 'Vêtements longs pour mosquée', quantityPerPerson: 1 },
    { name: 'Chapeau', quantityPerPerson: 1 },
    { name: 'Lunettes de soleil', quantityPerPerson: 1 },
    { name: 'Crème solaire', quantityPerPerson: 1 },
    { name: 'Maillot de bain', quantityPerPerson: 1 },
    { name: 'Sandales', quantityPerPerson: 1 },
    { name: 'Guide Dubaï', quantity: 1 },
    { name: 'Carte bancaire', quantity: 1 },
    { name: 'Appareil photo', quantity: 1 },
    { name: 'Trousse de secours', quantity: 1 },
    { name: 'Powerbank', quantity: 1 }
  ]
},
{
  destination: 'Mexique',
  items: [
    { name: 'Passeport', quantityPerPerson: 1 },
    { name: 'Billet d’avion', quantityPerPerson: 1 },
    { name: 'Crème solaire', quantityPerPerson: 1 },
    { name: 'Chapeau', quantityPerPerson: 1 },
    { name: 'Maillot de bain', quantityPerPerson: 1 },
    { name: 'Sandales', quantityPerPerson: 1 },
    { name: 'Répulsif moustique', quantityPerPerson: 1 },
    { name: 'Guide Mexique', quantity: 1 },
    { name: 'Appareil photo', quantity: 1 },
    { name: 'Vêtements légers', quantityPerPerson: 3 },
    { name: 'Lunettes de soleil', quantityPerPerson: 1 },
    { name: 'Powerbank', quantity: 1 },
    { name: 'Carte bancaire', quantity: 1 },
    { name: 'Sac à dos', quantity: 1 },
    { name: 'Trousse de pharmacie', quantity: 1 }
  ]
},
{
  destination: 'Afrique du Sud',
  items: [
    { name: 'Passeport', quantityPerPerson: 1 },
    { name: 'Billet d’avion', quantityPerPerson: 1 },
    { name: 'Chapeau', quantityPerPerson: 1 },
    { name: 'Crème solaire', quantityPerPerson: 1 },
    { name: 'Guide Afrique du Sud', quantity: 1 },
    { name: 'Appareil photo', quantity: 1 },
    { name: 'Powerbank', quantity: 1 },
    { name: 'Vêtements légers', quantityPerPerson: 2 },
    { name: 'Vêtements chauds pour safari', quantityPerPerson: 2 },
    { name: 'Lunettes de soleil', quantityPerPerson: 1 },
    { name: 'Trousse de premiers secours', quantity: 1 },
    { name: 'Sandales', quantityPerPerson: 1 },
    { name: 'Sac à dos', quantity: 1 },
    { name: 'Réserve d’eau', quantity: 1 },
    { name: 'Chaussures marche', quantityPerPerson: 1 }
  ]
},
{
  destination: 'Portugal',
  items: [
    { name: 'Passeport/Carte identité', quantityPerPerson: 1 },
    { name: 'Billet avion', quantityPerPerson: 1 },
    { name: 'Guide Portugal', quantity: 1 },
    { name: 'Vêtements confort', quantityPerPerson: 3 },
    { name: 'Maillot de bain', quantityPerPerson: 1 },
    { name: 'Sandales', quantityPerPerson: 1 },
    { name: 'Crème solaire', quantityPerPerson: 1 },
    { name: 'Chapeau', quantityPerPerson: 1 },
    { name: 'Appareil photo', quantity: 1 },
    { name: 'Lunettes de soleil', quantityPerPerson: 1 },
    { name: 'Powerbank', quantity: 1 },
    { name: 'Trousse de premiers secours', quantity: 1 },
    { name: 'Carte bancaire', quantity: 1 },
    { name: 'Livres', quantity: 1 },
    { name: 'Paréo', quantityPerPerson: 1 }
  ]
},
{
  destination: 'Vietnam',
  items: [
    { name: 'Passeport', quantityPerPerson: 1 },
    { name: 'Visa Vietnam', quantityPerPerson: 1 },
    { name: 'Billet d’avion', quantityPerPerson: 1 },
    { name: 'Répulsif moustique', quantityPerPerson: 1 },
    { name: 'Chapeau', quantityPerPerson: 1 },
    { name: 'Vêtements légers', quantityPerPerson: 4 },
    { name: 'Guide Vietnam', quantity: 1 },
    { name: 'Appareil photo', quantity: 1 },
    { name: 'Powerbank', quantity: 1 },
    { name: 'Trousse de premiers secours', quantity: 1 },
    { name: 'Lunettes de soleil', quantityPerPerson: 1 },
    { name: 'Maillot de bain', quantityPerPerson: 1 },
    { name: 'Parapluie compact', quantity: 1 },
    { name: 'Carte bancaire', quantity: 1 },
    { name: 'Sandales', quantityPerPerson: 1 }
  ]
},
{
  destination: 'Singapour',
  items: [
    { name: 'Passeport', quantityPerPerson: 1 },
    { name: 'Visa Singapour', quantityPerPerson: 1 },
    { name: 'Billet d’avion', quantityPerPerson: 1 },
    { name: 'Vêtements légers', quantityPerPerson: 3 },
    { name: 'Guide Singapour', quantity: 1 },
    { name: 'Appareil photo', quantity: 1 },
    { name: 'Powerbank', quantity: 1 },
    { name: 'Sandales', quantityPerPerson: 1 },
    { name: 'Crème solaire', quantityPerPerson: 1 },
    { name: 'Carte bancaire', quantity: 1 },
    { name: 'Livres', quantity: 1 },
    { name: 'Trousse de pharmacie', quantity: 1 },
    { name: 'Chapeau', quantityPerPerson: 1 },
    { name: 'Lunettes de soleil', quantityPerPerson: 1 },
    { name: 'Parapluie compact', quantity: 1 }
  ]
},
{
  destination: 'Floride',
  items: [
    { name: 'Passeport', quantityPerPerson: 1 },
    { name: 'Billet d’avion', quantityPerPerson: 1 },
    { name: 'Guide Floride', quantity: 1 },
    { name: 'Maillot de bain', quantityPerPerson: 2 },
    { name: 'Lunettes de soleil', quantityPerPerson: 1 },
    { name: 'Crème solaire', quantityPerPerson: 1 },
    { name: 'Shorts', quantityPerPerson: 2 },
    { name: 'Tongs', quantityPerPerson: 1 },
    { name: 'Chapeau', quantityPerPerson: 1 },
    { name: 'Sandales', quantityPerPerson: 1 },
    { name: 'Appareil photo', quantity: 1 },
    { name: 'Parc pass', quantity: 1 },
    { name: 'Powerbank', quantity: 1 },
    { name: 'Carte bancaire', quantity: 1 },
    { name: 'Livres', quantity: 1 }
  ]
},
{
  destination: 'Pérou',
  items: [
    { name: 'Passeport', quantityPerPerson: 1 },
    { name: 'Billet d’avion', quantityPerPerson: 1 },
    { name: 'Guide Pérou', quantity: 1 },
    { name: 'Crème solaire', quantityPerPerson: 1 },
    { name: 'Chapeau', quantityPerPerson: 1 },
    { name: 'Anti-moustique', quantityPerPerson: 1 },
    { name: 'Vêtements de randonnée', quantityPerPerson: 2 },
    { name: 'Bâtons de marche', quantity: 1 },
    { name: 'Sac à dos', quantity: 1 },
    { name: 'Trousse de secours', quantity: 1 },
    { name: 'Appareil photo', quantity: 1 },
    { name: 'Parka', quantityPerPerson: 1 },
    { name: 'Powerbank', quantity: 1 },
    { name: 'Carte bancaire', quantity: 1 },
    { name: 'Gourde', quantityPerPerson: 1 }
  ]
},
{
  destination: 'Brésil',
  items: [
    { name: 'Passeport', quantityPerPerson: 1 },
    { name: 'Billet d’avion', quantityPerPerson: 1 },
    { name: 'Guide Brésil', quantity: 1 },
    { name: 'Maillot de bain', quantityPerPerson: 2 },
    { name: 'Sandales', quantityPerPerson: 1 },
    { name: 'Crème solaire', quantityPerPerson: 1 },
    { name: 'Chapeau', quantityPerPerson: 1 },
    { name: 'Tenue légère', quantityPerPerson: 3 },
    { name: 'Tongs', quantityPerPerson: 1 },
    { name: 'Paréo', quantityPerPerson: 1 },
    { name: 'Appareil photo', quantity: 1 },
    { name: 'Guide Rio', quantity: 1 },
    { name: 'Powerbank', quantity: 1 },
    { name: 'Carte bancaire', quantity: 1 },
    { name: 'Shorts', quantityPerPerson: 2 }
  ]
},
{
  destination: 'Norvège',
  items: [
    { name: 'Passeport', quantityPerPerson: 1 },
    { name: 'Billet d’avion', quantityPerPerson: 1 },
    { name: 'Veste chaude', quantityPerPerson: 1 },
    { name: 'Bonnet', quantityPerPerson: 1 },
    { name: 'Gants', quantityPerPerson: 1 },
    { name: 'Pulls', quantityPerPerson: 2 },
    { name: 'Pantalon chaud', quantityPerPerson: 1 },
    { name: 'Trousse de secours', quantity: 1 },
    { name: 'Appareil photo', quantity: 1 },
    { name: 'Crème solaire', quantityPerPerson: 1 },
    { name: 'Parapluie compact', quantity: 1 },
    { name: 'Crampons chaussures', quantity: 1 },
    { name: 'Guide Norvège', quantity: 1 },
    { name: 'Powerbank', quantity: 1 },
    { name: 'Carte bancaire', quantity: 1 }
  ]
},
{
  destination: 'Chine',
  items: [
    { name: 'Passeport', quantityPerPerson: 1 },
    { name: 'Visa Chine', quantityPerPerson: 1 },
    { name: 'Billet d’avion', quantityPerPerson: 1 },
    { name: 'Guide Chine', quantity: 1 },
    { name: 'Appareil photo', quantity: 1 },
    { name: 'Crème solaire', quantityPerPerson: 1 },
    { name: 'Chapeau', quantityPerPerson: 1 },
    { name: 'Parapluie compact', quantity: 1 },
    { name: 'Sandales', quantityPerPerson: 1 },
    { name: 'Vêtements légers', quantityPerPerson: 3 },
    { name: 'Carte bancaire', quantity: 1 },
    { name: 'Powerbank', quantity: 1 },
    { name: 'Masque (pollution)', quantityPerPerson: 1 },
    { name: 'Trousse de secours', quantity: 1 },
    { name: 'Sac à dos', quantity: 1 }
  ]
},
{
  destination: 'Suisse',
  items: [
    { name: 'Passeport/Carte identité', quantityPerPerson: 1 },
    { name: 'Billet train/avion', quantityPerPerson: 1 },
    { name: 'Veste chaude', quantityPerPerson: 1 },
    { name: 'Bonnet', quantityPerPerson: 1 },
    { name: 'Pulls', quantityPerPerson: 2 },
    { name: 'Crème solaire', quantityPerPerson: 1 },
    { name: 'Chocolat suisse', quantity: 1 },
    { name: 'Lunettes de soleil', quantityPerPerson: 1 },
    { name: 'Carte bancaire', quantity: 1 },
    { name: 'Guide Suisse', quantity: 1 },
    { name: 'Powerbank', quantity: 1 },
    { name: 'Trousse de secours', quantity: 1 },
    { name: 'Bottes', quantityPerPerson: 1 },
    { name: 'Vêtements techniques', quantityPerPerson: 2 },
    { name: 'Appareil photo', quantity: 1 }
  ]
},
{
  destination: 'Inde',
  items: [
    { name: 'Passeport', quantityPerPerson: 1 },
    { name: 'Visa Inde', quantityPerPerson: 1 },
    { name: 'Billet d’avion', quantityPerPerson: 1 },
    { name: 'Guide Inde', quantity: 1 },
    { name: 'Répulsif moustique', quantityPerPerson: 1 },
    { name: 'Trousse de secours', quantity: 1 },
    { name: 'Chapeau', quantityPerPerson: 1 },
    { name: 'Crème solaire', quantityPerPerson: 1 },
    { name: 'Vêtements légers', quantityPerPerson: 4 },
    { name: 'Sandales', quantityPerPerson: 1 },
    { name: 'Foulard', quantityPerPerson: 1 },
    { name: 'Lunettes de soleil', quantityPerPerson: 1 },
    { name: 'Carte bancaire', quantity: 1 },
    { name: 'Powerbank', quantity: 1 },
    { name: 'Appareil photo', quantity: 1 }
  ]
},
{
  destination: 'Hawaï',
  items: [
    { name: 'Passeport', quantityPerPerson: 1 },
    { name: 'Billet d’avion', quantityPerPerson: 1 },
    { name: 'Maillot de bain', quantityPerPerson: 2 },
    { name: 'Crème solaire', quantityPerPerson: 1 },
    { name: 'Paréo', quantityPerPerson: 1 },
    { name: 'Tongs', quantityPerPerson: 1 },
    { name: 'Chapeau', quantityPerPerson: 1 },
    { name: 'Lunettes de soleil', quantityPerPerson: 1 },
    { name: 'Powerbank', quantity: 1 },
    { name: 'Guide Hawaï', quantity: 1 },
    { name: 'Vêtements légers', quantityPerPerson: 4 },
    { name: 'Snorkel/masque', quantity: 1 },
    { name: 'Carte bancaire', quantity: 1 },
    { name: 'Appareil photo', quantity: 1 },
    { name: 'Gourde', quantityPerPerson: 1 }
  ]
},
{
  destination: 'Costa Rica',
  items: [
    { name: 'Passeport', quantityPerPerson: 1 },
    { name: 'Billet d’avion', quantityPerPerson: 1 },
    { name: 'Anti-moustique', quantityPerPerson: 1 },
    { name: 'Crème solaire', quantityPerPerson: 1 },
    { name: 'Vêtements légers', quantityPerPerson: 3 },
    { name: 'Chaussures de marche', quantityPerPerson: 1 },
    { name: 'Guide Costa Rica', quantity: 1 },
    { name: 'Sac à dos', quantity: 1 },
    { name: 'Trousse de secours', quantity: 1 },
    { name: 'Maillot de bain', quantityPerPerson: 1 },
    { name: 'Sandales', quantityPerPerson: 1 },
    { name: 'Powerbank', quantity: 1 },
    { name: 'Carte bancaire', quantity: 1 },
    { name: 'Chapeau', quantityPerPerson: 1 },
    { name: 'Appareil photo', quantity: 1 }
  ]
},
{
  destination: 'Tanzanie',
  items: [
    { name: 'Passeport', quantityPerPerson: 1 },
    { name: 'Visa Tanzanie', quantityPerPerson: 1 },
    { name: 'Billet d’avion', quantityPerPerson: 1 },
    { name: 'Chapeau', quantityPerPerson: 1 },
    { name: 'Crème solaire', quantityPerPerson: 1 },
    { name: 'Répulsif moustique', quantityPerPerson: 1 },
    { name: 'Chaussures marche', quantityPerPerson: 1 },
    { name: 'Guide Tanzanie', quantity: 1 },
    { name: 'Vêtements safari', quantityPerPerson: 2 },
    { name: 'Trousse de secours', quantity: 1 },
    { name: 'Lunettes de soleil', quantityPerPerson: 1 },
    { name: 'Powerbank', quantity: 1 },
    { name: 'Carte bancaire', quantity: 1 },
    { name: 'Appareil photo', quantity: 1 },
    { name: 'Gourde', quantityPerPerson: 1 }
  ]
},
{
  destination: 'Malaisie',
  items: [
    { name: 'Passeport', quantityPerPerson: 1 },
    { name: 'Billet d’avion', quantityPerPerson: 1 },
    { name: 'Anti-moustique', quantityPerPerson: 1 },
    { name: 'Guide Malaisie', quantity: 1 },
    { name: 'Crème solaire', quantityPerPerson: 1 },
    { name: 'Poncho de pluie', quantityPerPerson: 1 },
    { name: 'Vêtements légers', quantityPerPerson: 3 },
    { name: 'Sandales', quantityPerPerson: 1 },
    { name: 'Tongs', quantityPerPerson: 1 },
    { name: 'Sac à dos', quantity: 1 },
    { name: 'Trousse de secours', quantity: 1 },
    { name: 'Powerbank', quantity: 1 },
    { name: 'Carte bancaire', quantity: 1 },
    { name: 'Lunettes de soleil', quantityPerPerson: 1 },
    { name: 'Paréo', quantityPerPerson: 1 }
  ]
},
{
  destination: 'Los Angeles',
  items: [
    { name: 'Passeport', quantityPerPerson: 1 },
    { name: 'Billet d’avion', quantityPerPerson: 1 },
    { name: 'Guide Los Angeles', quantity: 1 },
    { name: 'Crème solaire', quantityPerPerson: 1 },
    { name: 'Lunettes de soleil', quantityPerPerson: 1 },
    { name: 'Maillot de bain', quantityPerPerson: 1 },
    { name: 'Short', quantityPerPerson: 2 },
    { name: 'Appareil photo', quantity: 1 },
    { name: 'Powerbank', quantity: 1 },
    { name: 'Carte bancaire', quantity: 1 },
    { name: 'Trousse de secours', quantity: 1 },
    { name: 'Sac à dos', quantity: 1 },
    { name: 'Sandales', quantityPerPerson: 1 },
    { name: 'T-shirt', quantityPerPerson: 2 },
    { name: 'Casquette', quantityPerPerson: 1 }
  ]
},
{
  destination: 'Amsterdam',
  items: [
    { name: 'Passeport/Carte identité', quantityPerPerson: 1 },
    { name: 'Billet train/avion', quantityPerPerson: 1 },
    { name: 'Guide Amsterdam', quantity: 1 },
    { name: 'Veste de pluie', quantityPerPerson: 1 },
    { name: 'Pull', quantityPerPerson: 1 },
    { name: 'Trousse de secours', quantity: 1 },
    { name: 'Carte bancaire', quantity: 1 },
    { name: 'Powerbank', quantity: 1 },
    { name: 'Sandales', quantityPerPerson: 1 },
    { name: 'Parapluie compact', quantity: 1 },
    { name: 'Lunettes de soleil', quantityPerPerson: 1 },
    { name: 'Appareil photo', quantity: 1 },
    { name: 'Chapeau', quantityPerPerson: 1 },
    { name: 'Vêtements confort', quantityPerPerson: 2 },
    { name: 'Livre', quantity: 1 }
  ]
},
{
  destination: 'Turquie',
  items: [
    { name: 'Passeport', quantityPerPerson: 1 },
    { name: 'Billet d’avion', quantityPerPerson: 1 },
    { name: 'Guide Turquie', quantity: 1 },
    { name: 'Crème solaire', quantityPerPerson: 1 },
    { name: 'Foulard', quantityPerPerson: 1 },
    { name: 'Trousse de secours', quantity: 1 },
    { name: 'Chapeau', quantityPerPerson: 1 },
    { name: 'Vêtements légers', quantityPerPerson: 3 },
    { name: 'Paréo', quantityPerPerson: 1 },
    { name: 'Powerbank', quantity: 1 },
    { name: 'Carte bancaire', quantity: 1 },
    { name: 'Appareil photo', quantity: 1 },
    { name: 'Lunettes de soleil', quantityPerPerson: 1 },
    { name: 'Sandales', quantityPerPerson: 1 },
    { name: 'Gourde', quantityPerPerson: 1 }
  ]
},
  
];

const seed = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI);
    await ItemSuggestion.deleteMany();
    await ItemSuggestion.insertMany(suggestions);
    console.log('✅ Suggestions insérées avec succès');
    process.exit();
  } catch (err) {
    console.error('❌ Erreur :', err);
    process.exit(1);
  }
};

seed();