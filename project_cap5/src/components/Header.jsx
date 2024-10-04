import React from 'react';
import logo from '../assets/investment-calculator-logo.png';

function Header({ title }) {
  return (
    <div id="header">
      <img src={logo} alt="Logo" />
      <h1>{title}</h1>
    </div>
  );
}

export default Header;
