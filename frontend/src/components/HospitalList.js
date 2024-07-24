import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { getHospitalsByCity, deleteHospital } from '../services/api';

const HospitalList = () => {
  const [hospitals, setHospitals] = useState([]);
  const [city, setCity] = useState('');

  useEffect(() => {
    if (city) {
      fetchHospitals();
    }
  }, [city]);

  const fetchHospitals = async () => {
    try {
      const response = await getHospitalsByCity(city);
      setHospitals(response.data);
    } catch (error) {
      console.error('Error fetching hospitals:', error);
    }
  };

  const handleDelete = async (id) => {
    if (window.confirm('Are you sure you want to delete this hospital?')) {
      try {
        await deleteHospital(id);
        setHospitals(hospitals.filter((hospital) => hospital._id !== id));
      } catch (error) {
        console.error('Error deleting hospital:', error);
      }
    }
  };

  return (
    <div className="card">
      <div className="search-container">
        <input
          type="text"
          value={city}
          onChange={(e) => setCity(e.target.value)}
          placeholder="Enter city"
        />
        <button onClick={fetchHospitals} className="btn">Search</button>
        
        <Link to="/create" className="btn btn-secondary">Add New Hospital</Link>
      </div>
      <div className="hospital-list">
        {hospitals.map((hospital) => (
          <div key={hospital._id} className="hospital-item">
            <h3>{hospital.name}</h3>
            <p>City: {hospital.city}</p>
            <p>Rating: {hospital.rating}</p>
            <Link to={`/hospital/${hospital._id}`} className="btn">View Details</Link>
            <Link to={`/edit/${hospital._id}`} className="btn btn-secondary">Edit</Link>
            <button onClick={() => handleDelete(hospital._id)} className="btn">Delete</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HospitalList;