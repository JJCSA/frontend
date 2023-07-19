import React from 'react';
import { ImFacebook, ImLinkedin2, ImTwitter, ImYoutube } from 'react-icons/im';
import { GrInstagram } from 'react-icons/gr';
import { BiCopyright } from 'react-icons/bi';
import { HashLink } from 'react-router-hash-link';
import './Footer.scss';

function Footer() {
  const getCurrentYear = () => {
    return new Date().getFullYear();
  };

  return (
    <div className="footer-container">
      <div className="footer">
        <div className="container">
          <div className="row">
            <div className="col-md-2">
              <h6>ABOUT US</h6>
              <ul className="list-unstyled">
                <li>
                  <HashLink
                    to="/about#mission-vision"
                    smooth
                    className="footer-sublinks"
                    activeClassName="activeLink"
                  >
                    Mission and Vision
                  </HashLink>{' '}
                </li>
                <li>
                  <HashLink
                    to="/about#timeline"
                    smooth
                    className="footer-sublinks"
                    activeClassName="activeLink"
                  >
                    Timeline
                  </HashLink>{' '}
                </li>
                <li>
                  <HashLink
                    to="/about#volunteers"
                    smooth
                    className="footer-sublinks"
                    activeClassName="activeLink"
                  >
                    Our Commitee
                  </HashLink>{' '}
                </li>
              </ul>
            </div>
            <div className="col-md-2">
              <h6>JOIN US</h6>
              <ul className="list-unstyled">
                <li>
                  <HashLink
                    to="/register"
                    smooth
                    className="footer-sublinks"
                    activeClassName="activeLink"
                  >
                    Register
                  </HashLink>{' '}
                </li>
              </ul>
            </div>
            <div className="col-md-2">
              <HashLink
                to="/landing-home#contact-us"
                smooth
                className="footer-link"
                activeClassName="activeLink"
              >
                CONTACT US
              </HashLink>
              <ul className="list-unstyled">
                <li>
                  <a
                    className="footer-sublinks"
                    activeClassName="activeLink"
                    href="jjcsausa@gmail.com"
                  >
                    jjcsausa@gmail.com
                  </a>
                </li>
              </ul>
            </div>
            <div className="col-md-2">
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
