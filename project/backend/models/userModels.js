const mongoose = require("mongoose");
const validator = require("validator");

const userSchema = new mongoose.Schema({
  username: {
    type: String,
    require: [true, "Username is Requored"],
    unique: true,
  },
  name: { type: String, require: [true, "Name is Requored"] },
  email: {
    type: String,
    require: [true, "Email is Requored"],
    unique: true,
    validate: {
      validator: validator.isEmail(),
      message: "Please enter a valid email",
    },
  },
  password: {
    type: String,
    require: [true, "Password is Requored"],
    validate: {
      validator: function (_value) {
        return (
          validator.isStrongPassword,
          {
            minLength: 15,
            minLowercase: 1,
            minUppercase: 1,
            minNumbers: 1,
            minSymbols: 1,
          }
        );
      },
    },
  },
});

const UserCollections = mongoose.model("User", userSchema);

module.exports = UserCollections;
