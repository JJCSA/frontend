import React from 'react';
import { ImLinkedin2, ImYoutube, ImWhatsapp } from 'react-icons/im';
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
        <footer>
          <div className="container-fluid py-5 p-5">
            <div className="row py-3">
              <div className="col-lg-2 col-md-6 mb-4 mb-lg-0">
                <h6 className="text-uppercase font-weight-bold mb-4">HOME</h6>
                <ul className="list-unstyled mb-0">
                  <li className="mb-2">
                    <a href="/landing-home#jjc-mission">Core Values</a>
                  </li>
                  <li className="mb-2">
                    <a href="/landing-home#about-us">About Us</a>
                  </li>
                  <li className="mb-2">
                    <a href="/landing-home#testimonial">Testimonial</a>
                  </li>
                  <li className="mb-2">
                    <a href="/landing-home#contact-us">Contact Us </a>
                  </li>
                  <li className="mb-2">
                    <a href="https://www.jainjagruti.com/">
                      JJC Central Board{' '}
                    </a>
                  </li>
                </ul>
              </div>
              <div className="col-lg-2 col-md-6 mb-4 mb-lg-0">
                <h6 className="text-uppercase font-weight-bold mb-4">About</h6>
                <ul className="list-unstyled mb-0">
                  <li className="mb-2">
                    <a href="/about#mission-vision">Mission & Vision</a>
                  </li>
                  <li className="mb-2">
                    <a href="/about#timeline">Our History</a>
                  </li>
                  <li className="mb-2">
                    <a href="/about#leadership">Leadership</a>
                  </li>
                  <li className="mb-2">
                    <a href="/volunteers">Volunteers</a>
                  </li>
                  <li className="mb-2">
                    <a href="/about#trustees">JJCCBCT</a>
                  </li>
                </ul>
              </div>

              <div className="col-lg-2 col-md-6 mb-4 mb-lg-0">
                <h6 className="text-uppercase font-weight-bold mb-4">
                  GET INVOLVED
                </h6>
                <ul className="list-unstyled mb-0">
                  <li className="mb-2">
                    <a href="/register">Join Us</a>
                  </li>
                </ul>
              </div>

              <div className="col-lg-2 col-md-6 mb-4 mb-lg-0">
                <h6 className="text-uppercase font-weight-bold mb-4">
                  CONTACT US
                </h6>
                <ul className="list-unstyled mb-0">
                  <li className="mb-2">
                    <a href="mailto:jjcsausa@gmail.com">jjcusa@gmail.com</a>
                  </li>
                </ul>
              </div>
              <div className="col-lg-4 col-md-6 mb-lg-0">
                <h6 className="text-uppercase font-weight-bold mb-4">
                  <u>JAIN JAGRUTI CENTRE USA</u>
                </h6>
                <p className="mb-4">
                  JJC USA is a non profit organization, a subsidiary of Jain
                  Jagruti Centre Central Board and Charitable trust
                </p>
                <p className="mb-4">
                  <a
                    className="font-weight-bold mb-4 mr-2"
                    href="/PrivacyPolicy"
                  >
                    PRIVACY POLICY
                  </a>{' '}
                  |
                  <a
                    className="font-weight-bold mb-4 ml-2"
                    href="/TermsAndConditions"
                  >
                    TERMS AND CONDITIONS
                  </a>
                </p>
                <ul className="list-inline">
                  <li className="list-inline-item">
                    <a
                      href="https://www.instagram.com/jjcusa/"
                      target="_blank"
                      rel="noopener noreferrer"
                      title="instagram"
                    >
                      <GrInstagram />
                    </a>
                  </li>
                  <li className="list-inline-item">
                    <a
                      href="https://www.linkedin.com/in/jjc-us-student-association/"
                      target="_blank"
                      rel="noopener noreferrer"
                      title="linkedin"
                    >
                      <ImLinkedin2 />
                    </a>
                  </li>
                  <li className="list-inline-item">
                    <a
                      href="https://www.youtube.com/channel/UCERP8n9IzMXT6eqZtUQVovw?view_as=subscriber"
                      target="_blank"
                      rel="noopener noreferrer"
                      title="youtube"
                    >
                      <ImYoutube />
                    </a>
                  </li>
                  <li className="list-inline-item">
                    <a
                      href="https://wa.me/19093336349 "
                      target="_blank"
                      rel="noopener noreferrer"
                      title="whatsapp"
                    >
                      <ImWhatsapp />
                      <strong> (Message Only)</strong>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <hr className="p-0 m-0 b-0" />

          <div className="bg-light py-2">
            <div className="container text-center">
              <p className="copyright-text mb-0 py-2">
                <BiCopyright />
                &nbsp;{getCurrentYear()} Copyright reserved JJC USA
              </p>
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
}

export default Footer;
