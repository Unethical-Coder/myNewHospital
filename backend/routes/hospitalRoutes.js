const express = require('express');
const router = express.Router();
const {
  createHospital,
  getHospitalsByCity,
  deleteHospital,
  updateHospital,
  addHospitalDetails,
  getHospitalById,
} = require('../controllers/hospitalController');

router.post('/create', createHospital);
router.get('/city', getHospitalsByCity);
router.delete('/delete', deleteHospital);
router.put('/update', updateHospital);
router.post('/details', addHospitalDetails);
router.get('/:id', getHospitalById);

module.exports = router;
