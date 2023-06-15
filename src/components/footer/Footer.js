import React from 'react';
import { ImFacebook, ImLinkedin2, ImTwitter, ImYoutube } from 'react-icons/im';
import { GrInstagram } from 'react-icons/gr';
import { BiCopyright } from 'react-icons/bi';
import { NavHashLink } from 'react-router-hash-link';
import './Footer.scss';

function Footer() {
  const getCurrentYear = () => {
    return new Date().getFullYear();
  };

  return (
    <div className="footer-container">
      <div className="footer">
        <NavHashLink
          to="/landing-home#home"
          smooth
          className="footer-link"
          activeClassName="activeLink"
        >
          HOME
        </NavHashLink>{' '}
        |
        <NavHashLink
          to="/landing-home#jjc-mission"
          smooth
          className="footer-link"
          activeClassName="activeLink"
        >
          JJC MISSION
        </NavHashLink>{' '}
        |
        <NavHashLink
          to="/landing-home#news-feed"
          smooth
          className="footer-link"
          activeClassName="activeLink"
        >
          NEWS UPDATES
        </NavHashLink>{' '}
        |
        <NavHashLink
          to="/landing-home#contact-us"
          smooth
          className="footer-link"
          activeClassName="activeLink"
        >
          CONTACT US
        </NavHashLink>{' '}
        |
        <div>
          <a
            href="https://www.jainjagruti.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="footer-link"
          >
            JJC Central Board
          </a>
        </div>
      </div>
      <div className="social-media-icons">
        <ImFacebook />
        <GrInstagram />
        <ImLinkedin2 />
        <ImTwitter />
        <ImYoutube />
      </div>
      <div className="copyright1">
        <BiCopyright />
        &nbsp;{getCurrentYear()} Copyright reserved JJC Student Association USA
      </div>
    </div>
  );
}

export default Footer;
