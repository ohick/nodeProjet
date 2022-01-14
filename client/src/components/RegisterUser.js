import React from 'react';
import { useNavigate } from 'react-router-dom';

import RegisterForm from './RegisterForm';
import { registerUser, useAuthDispatch } from '../context/auth';

const RegisterUser = () => {
  const dispatch = useAuthDispatch();
  const history = useNavigate();

  const handleSubmit = async (formData) => {
    console.log(formData);
    await registerUser(dispatch, formData);
    history('/login');
  };

  return <RegisterForm onSubmit={(formData) => handleSubmit(formData)} register />;
};

export default RegisterUser;
