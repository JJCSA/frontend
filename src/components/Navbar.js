import React from 'react';
import { Link } from 'react-router-dom';
import { useKeycloak } from '@react-keycloak/web';
import './Navbar.scss';

function Navbar() {
  const { keycloak } = useKeycloak();

  const loginRegLink = (
    <ul className="navbar-nav">
      <li className="nav-item">
        <span role="button" tabIndex="-1" onClick={keycloak.login} className="nav-link">
          Login
        </span>
      </li>
      <li className="nav-item">
        <span role="button" tabIndex="-1" onClick={keycloak.register} className="nav-link">
          Register
        </span>
      </li>
    </ul>
  );

  const userLink = (
    <ul className="navbar-nav">
      <li className="nav-item">
        <Link to="/profile" className="nav-link">
          User
        </Link>
      </li>
      <li className="nav-item">
        <span role="button" tabIndex="-1" onClick={keycloak.logout} className="nav-link">
          Logout
        </span>
      </li>
    </ul>
  );

  return (
    <nav className="NAVBAR navbar navbar-expand-lg navbar-dark bg-dark rounded">
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarsExample10"
        aria-controls="navbarsExample10"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon" />
      </button>

      <div
        className="collapse navbar-collapse justify-content-md-center"
        id="navbarsExample10"
      >
        <ul className="navbar-nav">
          <li className="nav-item">
            <Link to="/" className="nav-link">
              Home
            </Link>
          </li>
        </ul>
        {keycloak.authenticated ? userLink : loginRegLink}
      </div>
    </nav>
  );
}

export default Navbar;
