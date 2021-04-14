import React, { Component } from 'react';
import { Link } from 'react-scroll';
import { jjcIcon } from '../../assets/index';

import './LandingNavBar.scss';

class LandingNavBar extends Component {
  render() {
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
            <Link
              data-toggle="collapse"
              data-target=".navbar-collapse.show"
              offset={-350}
              activeClass="active"
              className="nav-item nav-link active navbarhover px-3"
              to="about-us"
              spy
              smooth
              duration={1000}
            >
              About Us
            </Link>
            <Link
              data-toggle="collapse"
              data-target=".navbar-collapse.show"
              offset={-150}
              activeClass="active"
              className="nav-item nav-link active navbarhover px-3"
              to="our-initiatives"
              spy
              smooth
              duration={1000}
            >
              Ongoing Initiatives
            </Link>
            <Link
              data-toggle="collapse"
              data-target=".navbar-collapse.show"
              offset={-350}
              activeClass="active"
              className="nav-item nav-link active navbarhover px-3"
              to="testimonials"
              spy
              smooth
              // offset={-70}
              duration={1000}
            >
              Testimonials
            </Link>

            <Link
              data-toggle="collapse"
              data-target=".navbar-collapse.show"
              offset={-350}
              activeClass="active"
              className="nav-item nav-link active navbarhover px-3"
              to="news-updates"
              spy
              smooth
              duration={1000}
            >
              News Updates
            </Link>

            <Link
              data-toggle="collapse"
              data-target=".navbar-collapse.show"
              offset={-350}
              activeClass="active"
              className="nav-item nav-link active navbarhover px-3"
              to="contact-us"
              spy
              smooth
              duration={1000}
            >
              Contact Us
            </Link>
            <a
              className=" jjclink"
              href="https://www.jainjagruti.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              JJC Central Board
            </a>
          </div>
          <form className="form-inline">
            <button
              className="form-control btn btn-light btn-block mr-sm-3 login-button"
              type="button"
            >
              Login
            </button>
            <button
              className="form-control btn btn-light btn-block my-2 my-sm-0 mr-sm-5 donate-button"
              type="button"
            >
              Donate
            </button>
          </form>
        </div>
      </nav>
    );
  }
}
export default LandingNavBar;
