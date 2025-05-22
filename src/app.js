const sequelize = require('./config/db');
const { Router } = require('express');
const User = require('./models/User');
const express = require('express');
const authRoutes = require('./routes/auth');
const workspaceRoutes = require('./routes/workspaceRoutes');


const app = express();

app.use(express.json());

//auth routes

app.use('/api/auth', authRoutes);

app.use('/api/users', authRoutes);

app.use('/api/workspaces', workspaceRoutes);

app.get('/', (req, res) => {
  res.send('Hello from first Collabspace App');
});

const usersRouter = Router();

usersRouter.get('/', async (req, res) => {
  try {
    const users = await User.findAll();
    res.json(users);
  } catch (err) {
    res.status(500).json({ error: 'Failed to fetch users' });
  }
});

app.use('/api/users', usersRouter);

sequelize.sync()
.then(() => { console.log('Posgresql Database sync'); })
.catch((err) => { console.log('Error syncing with database, database dont connected', err); });

module.exports = app;