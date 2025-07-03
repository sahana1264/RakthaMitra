// models/BloodRequest.js
const mongoose = require("mongoose");

const requestSchema = new mongoose.Schema({
  patientId: { type: mongoose.Schema.Types.ObjectId, ref: "Patient" },
  donorId: { type: mongoose.Schema.Types.ObjectId, ref: "Donor" },
  bloodGroup: String,
  quantity: Number,
  location: String,
  status: { type: String, default: "Requested" }, // Requested, Accepted, Declined
  createdAt: { type: Date, default: Date.now },
});

module.exports = mongoose.model("BloodRequest", requestSchema);
