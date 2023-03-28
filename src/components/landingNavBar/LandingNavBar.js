import React, { Component } from 'react';
import { Link as HashLink } from 'react-scroll';
import { Link } from 'react-router-dom';
import { useIsAuthenticated, useSignOut } from 'react-auth-kit';
import { jjcIcon, UserDropDownIcon } from '../../assets/index';
import './LandingNavBar.scss';
import Avatar from '../avatar/Avatar';
import { OverlayTrigger, Button, Popover } from 'react-bootstrap';

// eslint-disable-next-line react/prop-types
function LandingNavBar() {
  const isAuthenticated = useIsAuthenticated();
  const signOut = useSignOut();

  const landingNavbar = (
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
          <HashLink
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
          </HashLink>
          <HashLink
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
          </HashLink>
          <HashLink
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
          </HashLink>

          <HashLink
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
          </HashLink>

          <HashLink
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
          </HashLink>
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
          <Link
            to="/login"
            className="form-control btn btn-light btn-block mr-sm-3 login-button"
          >
            Login
          </Link>
          <Link
            to="/"
            className="form-control btn btn-light btn-block my-2 my-sm-0 mr-sm-5 donate-button"
          >
            Donate
          </Link>
        </form>
      </div>
    </nav>
  );

  const popover = (
    <Popover>
      <Popover.Content className="user-profile-dropdown-content">
        <div className="p-1"><Link to="/profile">Profile</Link></div>
        <hr className="m-0"/>
        <div className="p-1" onClick={signOut}>Logout</div>
      </Popover.Content>
    </Popover>
  );

  const userNavbar = (
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
          <HashLink
            data-toggle="collapse"
            data-target=".navbar-collapse.show"
            offset={-350}
            activeClass="active"
            className="nav-item nav-link active navbarhover px-3"
            to="news-feed"
            spy
            smooth
            duration={1000}
          >
            NewsFeed
          </HashLink>
          <HashLink
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
            Search Engine
          </HashLink>
          <HashLink
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
            Event Calendar
          </HashLink>
        </div>
        <form className="form-inline">
          <button
            className="form-control btn btn-light btn-block mr-sm-5 post-questions-button"
            type="button"
          >
            Post Questions
          </button>
          <Avatar />
          <h6 className="m-3">Hi, Test</h6>
          <OverlayTrigger trigger="click" placement="bottom" overlay={popover}>
            <img src={UserDropDownIcon} alt="UserDropdownIcon" className="mr-sm-5 user-profile-dropdown-icon"/>
          </OverlayTrigger>
        </form>
      </div>
    </nav>
  );

  return (
    <>{isAuthenticated() ? userNavbar : landingNavbar}</>
  );
}
export default LandingNavBar;