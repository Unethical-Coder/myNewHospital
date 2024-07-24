import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { getHospitalById } from '../services/api';

const HospitalDetails = () => {
  const [hospital, setHospital] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const { id } = useParams();

  useEffect(() => {
    fetchHospital();
  }, [id]);

  const fetchHospital = async () => {
    try {
      setLoading(true);
      const response = await getHospitalById(id);
      setHospital(response.data);
    } catch (error) {
      console.error('Error fetching hospital details:', error);
      setError('Failed to fetch hospital details');
    } finally {
      setLoading(false);
    }
  };

  if (loading) return <div className="card">Loading...</div>;
  if (error) return <div className="card">Error: {error}</div>;
  if (!hospital) return <div className="card">Hospital not found</div>;

  return (
    <div className="card">
      <h2>{hospital.name}</h2>
      <img src={hospital.imageUrl} alt={hospital.name} style={{ maxWidth: '100%', borderRadius: '8px' }} />
      <p>City: {hospital.city}</p>
      <p>Specialities: {hospital.specialities.join(', ')}</p>
      <p>Rating: {hospital.rating}</p>
      <p>Description: {hospital.description || 'No description available'}</p>
      <p>Number of Doctors: {hospital.numberOfDoctors || 'N/A'}</p>
      <p>Number of Departments: {hospital.numberOfDepartments || 'N/A'}</p>
    </div>
  );
};

export default HospitalDetails;