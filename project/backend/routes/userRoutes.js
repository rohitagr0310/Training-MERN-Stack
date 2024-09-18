const express = require("express");
const router = require("router");
const userController = require("./../controllers/userController");

router.post("/register", userController.createUser); // Register a new user
router.post("/login", userController.loginUser); // Login
router.post("/logout", userController.logoutUser); // Logout
router.get("/find:userId", userController.findOneUser); // Get a user by ID

module.exports = router;
