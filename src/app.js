require('dotenv').config(); // Load environment variables
const express = require('express');
const bodyParser = require('body-parser');
const sequelize = require('./src/utils/database');
const routes = require('./src/routes');

const app = express();

app.use(bodyParser.json());
app.use('/api', routes);

const PORT = process.env.PORT || 3000;

sequelize.sync()
  .then(() => {
    app.listen(PORT, () => {
      console.log(`Server is running on port ${PORT}`);
    });
  })
  .catch(err => {
    console.error('Unable to connect to the database:', err);
  });
