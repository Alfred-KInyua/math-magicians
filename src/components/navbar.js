import React from 'react';
import { NavLink } from 'react-router-dom';

const NavBar = () => (
  <header>
    <nav className="top">
      <div className="logo">
        <NavLink to="/" className={({ isActive }) => (isActive ? 's' : '')}>
          {' '}
          <h1>Math Magician</h1>
        </NavLink>
      </div>
      <ul className="navbar">
        <li className="nav-link ">
          <NavLink
            to="/"
            className={({ isActive }) => (isActive ? 'link' : '')}
          >
            Home
          </NavLink>
        </li>
        <li className="nav-link">
          <NavLink
            to="/calculator"
            className={({ isActive }) => (isActive ? 'link' : '')}
          >
            Calculator
          </NavLink>
        </li>
        <li className="nav-link">
          <NavLink
            to="/quotes"
            className={({ isActive }) => (isActive ? 'link' : '')}
          >
            Quotes
          </NavLink>
        </li>
      </ul>
    </nav>
  </header>
);

export default NavBar;
