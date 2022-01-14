import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

import Articles from './articles/Articles.js';
import RegisterForm from './RegisterForm.js';
import { useAuthState } from '../context/auth';

const Home = () => {
  const authState = useAuthState();
  const history = useNavigate();
  useEffect(() => {
    if (!authState.isAuth) history('/register');
  }, [authState.isAuth, history]);
  return (
    <div>
      Home
      {authState.isAuth ? <Articles /> : <RegisterForm register />}
    </div>
  );
};

export default Home;
