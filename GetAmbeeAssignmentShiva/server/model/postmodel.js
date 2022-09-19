const mongoose = require("mongoose");

const userDataSchema = new mongoose.Schema({
  User: {
    type: String,
    trim: true,
    required: [true, "Data must have a username"],
  },
  Name: {
    type: String,
    trim: true,
    required: [true, "Data must have a name"],
  },
  Date: {
    type: Date,
    required: [true, "Data must have date"],
  },
  changes: {
    type: Number,
    required: [true, "Data must have number of changes"],
  },
  updatedAt: {
    type: Date,
    default: new Date(),
  },
});
const userData = mongoose.model("userData", userDataSchema);
module.exports = userData;
