const express = require('express');
const dotenv = require('dotenv');
const cors = require('cors');
const connectDB = require('./config/db');

dotenv.config();
const app = express();

connectDB();

app.use(cors());
app.use(express.json());

// Routes
app.use('/api/auth', require('./routes/authRoutes'));
app.use('/api/home', require('./routes/homeRoutes'));
app.use('/api/trips', require('./routes/tripRoutes'));
const itemRoutes = require('./routes/itemRoutes');
app.use('/api/items', itemRoutes);
app.use('/api/destinations', require('./routes/destinationRoutes'));
app.listen(process.env.PORT, () => {
  console.log(`🚀 Server running on port ${process.env.PORT}`);
});
const tripRoutes = require('./routes/tripRoutes');
app.use('/api/trips', tripRoutes);