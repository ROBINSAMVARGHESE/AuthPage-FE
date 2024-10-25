// src/pages/SignupPage.js
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { signup } from '../Service/AuthService';
import SignupForm from '../SignupForm';


const SignupPage = () => {
  const navigate = useNavigate();

  const handleSignup = async (formData) => {
    try {
      await signup(formData);
      navigate('/login'); // Redirect to login page after signup
    } catch (error) {
      console.error('Error signing up', error);
    }
  };

  return <SignupForm onSignup={handleSignup} />;
};

export default SignupPage;
