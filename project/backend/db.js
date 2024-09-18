const mongoose = require("mongoose");

const dbConnect = async () => {
  try {
    const conn = await mongoose.connect("mongodb://localhost:27017/eshopping");
    console.log("connection is succesful");
  } catch (error) {
    console.log(error);
  }
};
module.exports = dbConnect;
