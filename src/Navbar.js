import React from 'react';
import './Navbar.css';

function Navbar() {
  return (
    <nav className="navbar">
      <h1 className="navbar-title">Mi Pizzería</h1>
      <ul className="navbar-links">
        <li><a href="#">Principal</a></li>
        <li><a href="#">Contacto</a></li>
        <li><a href="#">Acerca de</a></li>
      </ul>
    </nav>
  );
}

export default Navbar;