const express = require('express');
const cors = require('cors');
const authRoutes = require('./routes/auth.routes');
const userRoutes = require('./routes/user.routes');
const scoreRoutes = require('./routes/score.routes');

const app = express();
app.use(cors());
app.use(express.json());

app.use('/api/auth', authRoutes);
app.use('/api/scores', scoreRoutes);
app.use('/api/users', userRoutes);

app.get('/', (req, res) => res.send('API GameHub OK'));

module.exports = app;