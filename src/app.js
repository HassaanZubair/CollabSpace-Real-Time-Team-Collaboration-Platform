const sequelize = require('./config/db');
const User = require('./models/User');
const express = require('express');
const app = express();

app.use(express.json());

//auth routes
const authRoutes = require('./routes/auth'); 
app.use('/api/auth', authRoutes);

app.get('/', (req, res) => {
  res.send('Hello from first Collabspace App');
});

sequelize.sync()
.then(() => { console.log('Posgresql Database sync'); })
.catch((err) => { console.log('Error syncing with database, database dont connected', err); });

module.exports = app;