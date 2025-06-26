const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const User = require('../models/user.model');

exports.register = async (req, res) => {
  const { email, password, pseudo } = req.body;
  try {
    const existingUser = await User.findOne({ email });
    if (existingUser) return res.status(409).json({ message: 'Email déjà utilisé' });

    const hashed = await bcrypt.hash(password, 10);
    const user = await User.create({ email, password: hashed, pseudo });

    res.status(201).json({ message: 'Utilisateur créé', user: { id: user._id, email, pseudo } });
  } catch (err) {
    res.status(500).json({ message: 'Erreur serveur' });
  }
};

exports.login = async (req, res) => {
  const { email, password } = req.body;
  try {
    const user = await User.findOne({ email });
    if (!user) return res.status(401).json({ message: 'Identifiants invalides' });
      
    const match = await bcrypt.compare(password, user.password);
    if (!match) return res.status(401).json({ message: 'Identifiants invalides' });


    const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, { expiresIn: '2h' });

    res.json({ token, user: { id: user._id, email: user.email, pseudo: user.pseudo } });
  } catch (err) {
    console.error("Erreur dans register :", err); 
    res.status(500).json({ message: 'Erreur serveur' });
  }  
};