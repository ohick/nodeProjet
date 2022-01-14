import React from 'react';
import { useNavigate } from 'react-router-dom';

import RegisterForm from './RegisterForm';
import { loginUser, useAuthDispatch } from '../context/auth';

const Login = () => {
  const dispatch = useAuthDispatch();
  const history = useNavigate();

  const handleSubmit = async ({ email, password }) => {
    const response = await loginUser(dispatch, { email, password });
    if (!response || !response.success) return;
    history('/');
  };

  return <RegisterForm onSubmit={(data) => handleSubmit(data)} />;
};

export default Login;
