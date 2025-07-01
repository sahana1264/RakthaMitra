// models/Patient.js
const mongoose = require("mongoose");

const patientSchema = new mongoose.Schema({
  name: String,
  phone: String,
  bloodGroup: String,
  hospital: String,
  location: String,
  requestDate: { type: Date, default: Date.now },
  quantity: Number,
  password: String,
  status: { type: String, default: "Pending" }, // Pending, Fulfilled
});

module.exports = mongoose.model("Patient", patientSchema);
