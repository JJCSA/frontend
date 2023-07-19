import React from 'react';
import { ImFacebook, ImLinkedin2, ImTwitter, ImYoutube } from 'react-icons/im';
import { GrInstagram } from 'react-icons/gr';
import { BiCopyright } from 'react-icons/bi';
import './Footer.scss';

function Footer() {
  const getCurrentYear = () => {
    return new Date().getFullYear();
  };

  return (
    <div className="FOOTER">
      <div className="footer-container">
        <footer className="w-100 py-4 flex-shrink-0">
          <div className="container-fluid py-4">
            <div className="row gy-4 gx-5">
              <div className="col-lg-4 col-md-6">
                <h6>
                  JJC USA is a non profit organization, a subsidiary of Jain
                  Jagruti Centre Central Board and Charitable trust
                </h6>
                <p>Privacy Policy | Terms and Conditions</p>
              </div>
              <div className="col-lg-2 col-md-6">
                <h5 className="text-white mb-3 mr-3">ABOUT US</h5>
                <ul className="list-unstyled text-muted">
                  <li>
                    <a href="/about#mission-vision">Mission & Vision</a>
                  </li>
                  <li>
                    <a href="/about#timeline">Our History</a>
                  </li>
                  <li>
                    <a href="/about#leadership">Leadership</a>
                  </li>
                  <li>
                    <a href="/about#volunteers">Volunteers</a>
                  </li>
                </ul>
              </div>
              <div className="col-lg-2 col-md-6">
                <h5 className="text-white mb-3">GET INVOLVED</h5>
                <ul className="list-unstyled text-muted">
                  <li>
                    <a href="#">Join Us</a>
                  </li>
                </ul>
              </div>
              <div className="col-lg-2 col-md-6">
                <h5 className="text-white mb-3">CONTACT US</h5>
                <ul className="list-unstyled text-muted">
                  <li>
                    <a href="#">jjcusa@gmail.com</a>
                  </li>
                </ul>
              </div>
              <div className="col-lg-2 col-md-6">
                <h5 className="text-white mb-3">JJC CENTRAL BOARD</h5>
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
            &nbsp;{getCurrentYear()} Copyright reserved JJC USA
          </div>
        </footer>
      </div>
    </div>
  );
}

export default Footer;
