const Hospital = require('../models/Hospital');

// Create a new hospital
exports.createHospital = async (req, res) => {
  try {
    const hospital = await Hospital.create(req.body);
    res.status(201).json(hospital);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// Get hospitals by city
exports.getHospitalsByCity = async (req, res) => {
  try {
    const hospitals = await Hospital.find({ city: req.query.city });
    res.status(200).json(hospitals);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// Delete a hospital by ID
exports.deleteHospital = async (req, res) => {
  try {
    await Hospital.findByIdAndDelete(req.query.id);
    res.status(200).json({ message: 'Hospital deleted successfully' });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// Update a hospital by ID
exports.updateHospital = async (req, res) => {
  try {
    const hospital = await Hospital.findByIdAndUpdate(req.query.id, req.body, { new: true });
    if (hospital) {
      res.status(200).json(hospital);
    } else {
      res.status(404).json({ message: 'Hospital not found' });
    }
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// Add hospital details by ID
exports.addHospitalDetails = async (req, res) => {
  try {
    const hospital = await Hospital.findByIdAndUpdate(req.query.id, req.body, { new: true });
    res.status(200).json(hospital);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// Fetch hospital details by ID
exports.getHospitalById = async (req, res) => {
  try {
    const hospital = await Hospital.findById(req.params.id);
    if (hospital) {
      res.status(200).json(hospital);
    } else {
      res.status(404).json({ message: 'Hospital not found' });
    }
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};
