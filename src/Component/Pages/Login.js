// src/pages/LoginPage.js
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { login } from '../Service/AuthService';
import LoginForm from '../../LoginForm';


const LoginPage = () => {
  const navigate = useNavigate();

  const handleLogin = async (credentials) => {
    try {
      const token = await login(credentials);
      if (token) {
        navigate('/home'); // Redirect to the protected home page after login
      }
    } catch (error) {
      console.error('Error logging in', error);
    }
  };

  return <LoginForm onLogin={handleLogin} />;
};

export default LoginPage;
