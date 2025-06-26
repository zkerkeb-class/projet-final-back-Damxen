// controllers/user.controller.js
const User = require('../models/user.model');

exports.updateUser = async (req, res) => {
  try {
    const { pseudo, email } = req.body;

    const updatedUser = await User.findByIdAndUpdate(
      req.params.id,
      { pseudo, email },
      { new: true, runValidators: true }
    );

    if (!updatedUser) {
      return res.status(404).json({ message: 'Utilisateur non trouvé' });
    }

    res.json({ message: 'Profil mis à jour', user: updatedUser });
  } catch (err) {
    console.error('Erreur updateUser:', err);
    res.status(500).json({ message: 'Erreur serveur' });
  }
};
