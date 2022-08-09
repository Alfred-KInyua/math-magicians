import React from 'react';
import { Link } from 'react-router-dom';

const NavBar = () => (
  <header>
    <nav className="flex space-btn">
      <div className="logo">
        <Link to="/">Math Magician</Link>
      </div>
      <ul className="navbar flex space-btn">
        <li className="nav-link border-right">
          <Link to="/" activeClassName="link">Home</Link>
        </li>
        <li className="nav-link border-right">
          <Link to="/calculator" activeClassName="link">Calculator</Link>
        </li>
        <li className="nav-link">
          <Link to="/quotes" activeClassName="link" exact>Quotes</Link>
        </li>
      </ul>
    </nav>
  </header>
);

export default NavBar;