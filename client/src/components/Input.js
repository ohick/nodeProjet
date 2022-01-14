import React from 'react';

const Input = ({ name, value, label, type, handleChange }) => {
  return (
    <div className="form-group">
      <label htmlFor="name" className="form-label">
        {label}
      </label>
      <input
        type={type}
        className="form-control"
        name={name}
        id={name}
        value={value}
        onChange={(e) => handleChange(e.target.value)}
      />
    </div>
  );
};

export default Input;
