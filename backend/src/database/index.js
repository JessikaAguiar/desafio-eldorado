const { Sequelize } = require('sequelize');
const config =
  require('../config/index.js')[process.env.NODE_ENV || 'development'];

const sequelize = new Sequelize(
  config.database,
  config.username,
  config.password,
  {
    host: config.host,
    dialect: config.dialect, // Certifique-se de usar o dialeto aqui
  }
);

module.exports = sequelize;
