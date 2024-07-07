
import React from 'react';
import './Button.css'; // Custom CSS file for additional styling

const Button = ({onClick}) => {
  return (
    <button className='button' onClick={onClick}>
      <svg className='equal-svg' width="20" height="20" viewBox="0 0 100 100">
        <rect width="100" height="10" y="20" />
        <rect width="100" height="10" y="60" />
      </svg>
      <svg className='plus-svg' width="20" height="20" viewBox="0 0 100 100">
        <rect width="10" height="100" x="50" />
        <rect width="100" height="10" y="40" />
      </svg>
    </button>
  );
};

export default Button;
