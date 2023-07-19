import React from 'react';
import './MiniAboutUs.scss';

const MiniAboutUs = () => {
  return (
    <div id="mini-about-us" className="MINIABOUTUS">
      <div className="text-center mt-3">
        <h4>ABOUT US</h4>
        <hr className="about-us" />
      </div>
      <div className="container mt-5">
        <div className="about-us-text">
          <blockquote>
            JJC USA is a non profit organization, a subsidiary of Jain Jagruti
            Centre Central Board and Charitable trust. It was formed in 2019
            with a motive to assist Jain community members living in the United
            States of America. The organization is formed by a diverse group of
            volunteers working together in different areas to deliver
            initiatives for incoming students and working professionals who are
            already settled in the US. In addition, we are committed to improve
            and provide a platform to Jain students and working professionals by
            organizing social and professional events to build a community of
            like minded individuals.
          </blockquote>
        </div>
      </div>
    </div>
  );
};

export default MiniAboutUs;
