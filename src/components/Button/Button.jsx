import React from 'react';
import './Button.scss';
import MuiButton from '@mui/material/Button';

const Button = ({ className, children, ...props }) => (
  <MuiButton
    className={`btn${className ? ` ${className}` : ''}`}
    {...props}
  >
    {children}
  </MuiButton>
);

export default Button
