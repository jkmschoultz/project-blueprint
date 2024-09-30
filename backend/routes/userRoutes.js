const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');

// User registration
router.post('/register', userController.registerUser);

// List all users
router.get('/', userController.getAllUsers);

// Get user details
router.get('/:id', userController.getUser);

// Update user details
router.put('/:id', userController.updateUser);

// Delete a user
router.delete('/:id', userController.deleteUser);

module.exports = router;
