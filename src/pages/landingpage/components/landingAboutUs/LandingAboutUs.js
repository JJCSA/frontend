import React from 'react';
import './LandingAboutUs.css';
import { Link } from 'react-router-dom';

const LandingAboutUs = () => {
  return (
    <div id="about-us" className="ABOUTUS">
      <div className="text-center mt-5">
        <h4>ABOUT US</h4>
        <hr className="about-us" />
      </div>
      <div className="container-fluid mt-5">
        <div className="row">
          <div className="col-md-6">
            <div className="aboutUsImage" />
          </div>
          <div className="col-md-6">
            <div className="about-us-text">
              <blockquote>
                JJC USA is a non profit organization, a branch of Jain Jagruti
                Centre Central Board Charitable Trust. It was formed in August
                2019 with a motive to assist Jain community members living in
                the United States of America. The organization is formed by a
                diverse group of volunteers working together in different areas
                to deliver initiatives for incoming students and working
                professionals who are already settled in the US. In addition, we
                are committed to improve and provide a platform to Jain students
                and working professionals by organizing social and professional
                events to build a community of like minded individuals.
              </blockquote>
            </div>
            <div className="knowMoreBox">
              <Link to="/about" className="text-decor">
                <button
                  type="button"
                  className="btn btn-light mx-auto d-flex justify-content-center know-more-button"
                >
                  Know More
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
    // <div className="fluid-container">
    //   <div className="aboutUsHeading">
    //     <h4>About Us</h4>
    //     <hr className="about-us" />
    //   </div>

    // </div>
  );
};

export default LandingAboutUs;
