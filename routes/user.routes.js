const express = require('express');
const router = express.Router();
const userController = require('../controllers/user.controller');


const authenticate = require('../middlewares/auth.middleware');

router.patch('/:id', authenticate, userController.updateUser);

module.exports = router;
