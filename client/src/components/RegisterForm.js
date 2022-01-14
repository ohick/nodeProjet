import React, { useState, useEffect } from 'react';

import { useAuthState } from '../context/auth';
import Input from './Input';

const RegisterForm = ({ register = null, onSubmit, error }) => {
  const [email, setEmail] = useState('');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [passwordConfirm, setPasswordConfirm] = useState('');
  const [registration, setRegistration] = useState(false);
  const { errorMessage } = useAuthState();

  useEffect(() => {
    setRegistration(register);
  }, [register]);

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = { email, username, password, passwordConfirm };
    console.log(onSubmit);
    console.log(register);
    onSubmit(formData);
  };

  return (
    <div className="row justify-content-center p-5">
      <form className="col-6" onSubmit={handleSubmit}>
        <h1>{registration ? 'Inscription' : 'Connexion'}</h1>
        {errorMessage && (
          <div className="alert alert-danger" role="alert">
            {errorMessage}
          </div>
        )}
        {registration && (
          <Input
            name="username"
            value={username}
            label="Username"
            handleChange={(val) => setUsername(val)}
            type="text"
          />
        )}
        <Input name="email" value={email} label="Email address" handleChange={(val) => setEmail(val)} type="email" />
        <Input
          name="password"
          value={password}
          label="Password"
          handleChange={(val) => setPassword(val)}
          type="password"
        />
        {registration && (
          <Input
            name="passwordConfirm"
            value={passwordConfirm}
            label="Confirm Password"
            handleChange={(val) => setPasswordConfirm(val)}
            type="password"
          />
        )}

        <button type="submit" className="btn btn-primary mt-3">
          Submit
        </button>
        {registration && (
          <p>
            Déjà inscrit?{' '}
            <a href="/login" className="link-primary">
              Connectez-vous ici.
            </a>
          </p>
        )}
      </form>
    </div>
  );
};

export default RegisterForm;
