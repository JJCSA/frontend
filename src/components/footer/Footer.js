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
        <div class="container">
          <div class="row">
            <div class="col-md-2">
              <h5>ABOUT US</h5>
              <ul class="list-unstyled">
                <li>
                  <NavHashLink
                    to="/about#mission-vision"
                    smooth
                    className="footer-sublinks"
                    activeClassName="activeLink"
                  >
                    Mission and Vision
                  </NavHashLink>{' '}
                </li>
                <li>
                  <NavHashLink
                    to="/about#timeline"
                    smooth
                    className="footer-sublinks"
                    activeClassName="activeLink"
                  >
                    Timeline
                  </NavHashLink>{' '}
                </li>
                <li>
                  <NavHashLink
                    to="/about#volunteers"
                    smooth
                    className="footer-sublinks"
                    activeClassName="activeLink"
                  >
                    Our Commitee
                  </NavHashLink>{' '}
                </li>
              </ul>
            </div>
            <div class="col-md-2">
              <NavHashLink
                to="/landing-home#contact-us"
                smooth
                className="footer-link"
                activeClassName="activeLink"
              >
                CONTACT US
              </NavHashLink>
            </div>
            <div class="col-md-2">
              <a
                href="https://www.jainjagruti.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="footer-link"
              >
                JJC CENTRE BOARD
              </a>
            </div>
          </div>
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
