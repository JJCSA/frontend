import React from 'react';
import { NavHashLink } from 'react-router-hash-link';
import { Link } from 'react-router-dom';
import { jjcIcon } from '../../assets/index';
import './LandingNavbar.scss';

function LandingNavbar() {
  return (
    <nav className="navbar navbar-light bg-light navbar-expand-sm rounded fixed-top position-sticky">
      <a
        className="navbar-brand ml-sm-5 px-3"
        href="/"
        target="_self"
        rel="noopener noreferrer"
      >
        <img src={jjcIcon} alt="JJC logo" />
      </a>
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#myTogglerNav"
        aria-controls="myTogglerNav"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon" />
      </button>

      <div className="collapse navbar-collapse" id="myTogglerNav">
        <div className="navbar-nav mr-auto my-sm-2">
          <NavHashLink
            className="nav-item nav-link active navbarhover px-3"
            to="/#home"
            smooth
            activeClassName="activeLink"
          >
            Home
          </NavHashLink>
          <NavHashLink
            className="nav-item nav-link active navbarhover px-3"
            to="/#jjc-mission"
            smooth
            activeClassName="activeLink"
          >
            JJC Mission
          </NavHashLink>
          <NavHashLink
            className="nav-item nav-link active navbarhover px-3"
            to="/#news-feed"
            smooth
            activeClassName="activeLink"
          >
            News Updates
          </NavHashLink>
          <NavHashLink
            className="nav-item nav-link active navbarhover px-3"
            to="/#contact-us"
            smooth
            activeClassName="activeLink"
          >
            Contact Us
          </NavHashLink>
          <NavHashLink
            className="nav-item nav-link active navbarhover px-3"
            to="https://www.jainjagruti.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            JJC Central Board
          </NavHashLink>
        </div>
        <form className="form-inline">
          <Link
            to="/login"
            className="form-control btn btn-light btn-block mr-sm-3 login-button"
          >
            Login
          </Link>
        </form>
      </div>
    </nav>
  );
}
export default LandingNavbar;
