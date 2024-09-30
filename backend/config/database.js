const { Sequelize } = require('sequelize');
const path = require('path');
require('dotenv').config({
    path: process.env.NODE_ENV === 'test' ? path.join(__dirname, '../.env.test') : path.join(__dirname, '../.env')
});

// Log the database name
console.log('Database Name:', process.env.DB_NAME);

// Create a Sequelize instance and connect to the SQLite database
const sequelize = new Sequelize({
    dialect: 'sqlite',
    storage: path.join(__dirname, '../', process.env.DB_NAME), // Path to the SQLite database file
    logging: false, // Disable logging if you don't need it
});

// Test the database connection
sequelize.authenticate()
    .then(() => {
        console.log('Connection to SQLite database has been established successfully.');
    })
    .catch(err => {
        console.error('Unable to connect to the SQLite database:', err);
    });

module.exports = sequelize;
