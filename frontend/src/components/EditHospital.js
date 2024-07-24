import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { getHospitalById, updateHospital } from '../services/api'; // Ensure getHospitalById is imported correctly

const EditHospital = () => {
  const [hospital, setHospital] = useState({
    name: '',
    city: '',
    imageUrl: '',
    rating: '',
    description: '',
    numberOfDoctors: '',
    numberOfDepartments: ''
  });
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    fetchHospital();
  }, [id]);

  const fetchHospital = async () => {
    try {
      setLoading(true);
      const response = await getHospitalById(id); // Fetch hospital data by ID
      setHospital(response.data);
    } catch (error) {
      console.error('Error fetching hospital details:', error);
      setError('Failed to fetch hospital details');
    } finally {
      setLoading(false);
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setHospital({ ...hospital, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await updateHospital(id, hospital);
      alert('Hospital updated successfully');
      navigate(`/hospital/${id}`);
    } catch (error) {
      console.error('Error updating hospital:', error);
      setError('Failed to update hospital');
    }
  };

  if (loading) return <div className="card">Loading...</div>;
  if (error) return <div className="card">Error: {error}</div>;
  if (!hospital) return <div className="card">Hospital not found</div>;

  return (
    <form onSubmit={handleSubmit} className="card">
      <input name="name" value={hospital.name} onChange={handleChange} placeholder="Name" required />
      <input name="city" value={hospital.city} onChange={handleChange} placeholder="City" required />
      <input name="imageUrl" value={hospital.imageUrl} onChange={handleChange} placeholder="Image URL" required />
      <input name="rating" type="number" value={hospital.rating} onChange={handleChange} placeholder="Rating" required />
      <textarea name="description" value={hospital.description} onChange={handleChange} placeholder="Description" />
      <input name="numberOfDoctors" type="number" value={hospital.numberOfDoctors} onChange={handleChange} placeholder="Number of Doctors" />
      <input name="numberOfDepartments" type="number" value={hospital.numberOfDepartments} onChange={handleChange} placeholder="Number of Departments" />
      <button type="submit" className="btn">Update Hospital</button>
    </form>
  );
};

export default EditHospital;
