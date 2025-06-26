const mongoose = require('mongoose');

const scoreSchema = new mongoose.Schema({
    userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
    value: { type: Number, required: true },
    createdAt: { type: Date, default: Date.now }
  });
  
  module.exports = mongoose.models.Score || mongoose.model('Score', scoreSchema);
