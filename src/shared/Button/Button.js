import React from 'react';
import styles from './Button.module.css';

const Button = (type, onClick, btnLabel, primary, disabled) => {
    <button
      type={type}
      className={primary ? 'btn btn-primary m-1' : 'btn btn-danger m-1'}
      disabled={disabled}
      onClick={onClick}
    >
      {btnLabel}
    </button>
};

export default Button;
