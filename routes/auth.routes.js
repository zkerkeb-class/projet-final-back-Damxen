const express = require('express');
const router = express.Router();
const { register, login } = require('../controllers/auth.controller');

router.post('/register', register);
router.post('/login', login);

module.exports = router;

const authMiddleware = require('../middlewares/auth.middleware');

router.get('/profile', authMiddleware, (req, res) => {
  res.json({ message: `Bienvenue ${req.user.id}, accès autorisé.` });
});