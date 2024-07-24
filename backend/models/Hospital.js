const mongoose = require('mongoose');

const HospitalSchema = new mongoose.Schema({
  name: { type: String, required: true },
  city: { type: String, required: true },
  imageUrl: { type: String, required: true },
  specialities: [{ type: String }],
  rating: { type: Number, required: true },
  description: { type: String },
  images: [{ type: String }],
  numberOfDoctors: { type: Number },
  numberOfDepartments: { type: Number },
});

module.exports = mongoose.model('Hospital', HospitalSchema);
