import React, { useState } from 'react';
import { createHospital } from '../services/api';

const HospitalForm = () => {
  const [hospital, setHospital] = useState({
    name: '',
    city: '',
    imageUrl: '',
    specialities: [],
    rating: 0,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setHospital({ ...hospital, [name]: value });
  };

  const handleSpecialities = (e) => {
    const specialities = Array.from(e.target.selectedOptions, (option) => option.value);
    setHospital({ ...hospital, specialities });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await createHospital(hospital);
      alert('Hospital created successfully');
    } catch (error) {
      console.error('Error creating hospital:', error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input name="name" value={hospital.name} onChange={handleChange} placeholder="Name" required />
      <input name="city" value={hospital.city} onChange={handleChange} placeholder="City" required />
      <input name="imageUrl" value={hospital.imageUrl} onChange={handleChange} placeholder="Image URL" required />
      <select multiple name="specialities" value={hospital.specialities} onChange={handleSpecialities}>
        <option value="Cardiology">Cardiology</option>
        <option value="Neurology">Neurology</option>
        <option value="Oncology">Oncology</option>
        <option value="Pediatrics">Pediatrics</option>
      </select>
      <input type="number" name="rating" value={hospital.rating} onChange={handleChange} placeholder="Rating" required />
      <button type="submit">Create Hospital</button>
    </form>
  );
};

export default HospitalForm;
