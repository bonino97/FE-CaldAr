import React from 'react';

const TextInput = (name, placeholder, label) => {
    <div>
      <label>{label}</label>
      <input name={name} placeholder={placeholder} />
    </div>
};

export default TextInput;
