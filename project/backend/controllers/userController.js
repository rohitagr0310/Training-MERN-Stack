const UserCollections = require("../models/user.model");

module.exports = {
  // Create a new user (register)
  createUser: (req, res) => {
    // Validate request
    if (!req.body) {
      return res.status(400).send({
        message: "User content cannot be empty",
      });
    }

    // Create a new user
    const user = new UserCollections({
      username: req.body.username,
      name: req.body.name,
      email: req.body.email,
      password: req.body.password,
      role: req.body.role || "user",
    });

    // Save user in the database
    user
      .save()
      .then((data) => {
        res.send(data);
      })
      .catch((err) => {
        res.status(500).send({
          message:
            err.message || "Some error occurred while creating the User.",
        });
      });
  },

  // Find a single user with id
  findOneUser: (req, res) => {
    UserCollections.findById(req.params.userId)
      .then((user) => {
        if (!user) {
          return res.status(404).send({
            message: "User not found with id " + req.params.userId,
          });
        }
        res.send(user);
      })
      .catch((err) => {
        if (err.kind === "ObjectId") {
          return res.status(404).send({
            message: "User not found with id " + req.params.userId,
          });
        }
        return res.status(500).send({
          message: "Error retrieving user with id " + req.params.userId,
        });
      });
  },

  // Login function
  loginUser: (req, res) => {
    UserCollections.findOne({ email: req.body.email })
      .then((user) => {
        if (!user || user.password !== req.body.password) {
          return res.status(401).send({
            message: "Invalid email or password",
          });
        }
        // Assuming you generate a token (JWT, for example) here
        const token = "fake-jwt-token"; // replace with actual token logic
        res.send({ message: "Login successful", token });
      })
      .catch((err) => {
        return res.status(500).send({
          message: "Error logging in user with email " + req.body.email,
        });
      });
  },

  // Logout function (simple placeholder)
  logoutUser: (req, res) => {
    // Assuming token invalidation happens here (e.g., blacklist the token)
    res.send({ message: "Logout successful" });
  },
};
