const Score = require('../models/score.model');

exports.createScore = async (req, res) => {
  try {
    const { value } = req.body;
    const newScore = await Score.create({ userId: req.user.id, value });
    res.status(201).json(newScore);
  } catch (err) {
    res.status(500).json({ message: 'Erreur lors de la création du score' });
  }
};

exports.getScores = async (req, res) => {
  try {
    const scores = await Score.find({ userId: req.user.id }).sort({ createdAt: -1 });
    res.json(scores);
  } catch (err) {
    res.status(500).json({ message: 'Erreur lors de la récupération des scores' });
  }
};
