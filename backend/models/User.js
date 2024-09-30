const { DataTypes } = require('sequelize');
const sequelize = require('../config/database'); // Import the Sequelize instance

// Define the User model
const User = sequelize.define('User', {
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
    },
    username: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
    },
    email: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
    },
    password: {
        type: DataTypes.STRING,
        allowNull: false,
    },
}, {
    timestamps: true, // Automatically adds createdAt and updatedAt fields
    tableName: 'users',
});

module.exports = User;
