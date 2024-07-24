import axios from 'axios';

const API_URL = 'https://myhospital-3fn5.onrender.com/api/v1/hospitals';

export const createHospital = (data) => axios.post(`${API_URL}/create`, data);
export const getHospitalsByCity = (city) => axios.get(`${API_URL}/city?city=${city}`);
export const deleteHospital = (id) => axios.delete(`${API_URL}/delete?id=${id}`);
export const updateHospital = (id, data) => axios.put(`${API_URL}/update?id=${id}`, data);
export const addHospitalDetails = (id, data) => axios.post(`${API_URL}/details?id=${id}`, data);
export const getHospitalById = (id) => axios.get(`${API_URL}/${id}`);
