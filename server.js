require('dotenv').config();
const mongoose = require('mongoose');
const app = require('./app');

const PORT = process.env.PORT || 5000;

mongoose.connect(process.env.MONGO_URI)
  .then(() => {
    console.log('✅ MongoDB connecté');
    app.listen(PORT, () => console.log(`🚀 Serveur lancé sur http://localhost:${PORT}`));
  })
  .catch((err) => console.error('❌ Erreur MongoDB :', err));