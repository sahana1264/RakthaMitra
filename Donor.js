// models/Donor.js
const mongoose = require("mongoose");

const donorSchema = new mongoose.Schema({
  name: String,
  phone: String,
  bloodGroup: String,
  location: String,
  lastDonationDate: Date,
  password: String,
  available: { type: Boolean, default: true },
});

module.exports = mongoose.model("Donor", donorSchema);
