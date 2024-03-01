import React from 'react';

export const InputField = ({ label, type, placeholder, name, value, onChange }) => {
  return (
    <div className='mb-3'>
      <label htmlFor={name}>{label}</label>
      <input
        type={type}
        className='form-control'
        placeholder={placeholder}
        name={name}
        value={value}
        onChange={onChange}
      />
    </div>
  );
};