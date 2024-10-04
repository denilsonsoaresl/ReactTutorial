import React from 'react';
import InputItem from './InputItem';

function InputGroup({ inputs, onInputChange }) {
  return (
    <div className="input-group">
      {inputs.map((input, index) => (
        <InputItem
          key={index}
          label={input.label}
          id={input.id}
          placeholder={input.placeholder}
          onInputChange={onInputChange}
        />
      ))}
    </div>
  );
}

export default InputGroup;
