// src/services/AuthService.js
import axios from 'axios';

const API_URL = 'http://localhost:5000/api/auth'; // Adjust as per your backend

export const signup = async (formData) => {
  return await axios.post(`${API_URL}/signup`, formData);
};

export const login = async (credentials) => {
  const response = await axios.post(`${API_URL}/login`, credentials);
  const token = response.data.token;
  if (token) {
    localStorage.setItem('token', token); // Store JWT in localStorage
  }
  return token;
};
