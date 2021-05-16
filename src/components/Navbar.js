import React from 'react';
import { Link } from 'react-router-dom';
import { useIsAuthenticated, useSignOut } from 'react-auth-kit';
import './Navbar.scss';

function Navbar() {
  // const { keycloak } = useKeycloak();
  const isAuthenticated = useIsAuthenticated();
  const signOut = useSignOut();

  const loginRegLink = (
    <ul className="navbar-nav">
      <li className="nav-item">
        <Link to="/login" className="nav-link">
          Login
        </Link>
      </li>
      <li className="nav-item">
        <Link to="/register" className="nav-link">
          Register
        </Link>
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
        <span role="button" tabIndex="-1" onClick={signOut} className="nav-link">
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
        {isAuthenticated() ? userLink : loginRegLink}
      </div>
    </nav>
  );
}

export default Navbar;
