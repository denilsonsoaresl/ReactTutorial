import React from 'react';

function InputItem({ label, id, placeholder, onInputChange }) {
  return (
    <div className="input-item">
      <label htmlFor={id}>{label}</label>
      <input 
        type="number" 
        id={id} 
        placeholder={placeholder}
        onChange={onInputChange}
      />
    </div>
  );
}

export default InputItem;
