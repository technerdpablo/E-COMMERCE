require('dotenv').config();

//  define the connection to the server/db
const Sequelize = require('sequelize');

const sequelize = process.env.JAWSDB_URL
  ? new Sequelize(process.env.JAWSDB_URL)
  : new Sequelize('ecommerce', 'root', 'Kim@2023', {
      host: 'localhost',
      dialect: 'mysql',
      dialectOptions: {
        decimalNumbers: true,
      },
    });

module.exports = sequelize;
