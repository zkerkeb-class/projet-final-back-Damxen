const express = require('express');
const router = express.Router();
const auth = require('../middlewares/auth.middleware');
const validate = require('../middlewares/validate.middleware');
const Joi = require('joi');
const { createScore, getScores } = require('../controllers/score.controller');

const scoreSchema = Joi.object({
  value: Joi.number().required()
});

router.post('/', auth, validate(scoreSchema), createScore);
router.get('/', auth, getScores);

module.exports = router;
