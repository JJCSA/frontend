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
          <blockquote className="quote">
            JJC USA is a non-profit organization, a branch of Jain Jagruti
            Centre Central Board and Charitable Trust, formed in August 2019
            with a motive to assist Jain community members living in the United
            States of America. The organization has grown into a thriving
            community of 1000+ members, living by the principle of helping each
            other. It comprises a diverse group of volunteers working together
            to deliver initiatives for incoming Jain students and working
            professionals already settled in the US. The organization is
            dedicated to improving and providing a platform for Jain students
            and working professionals through the organization of social and
            professional events, fostering a community of like-minded
            individuals. JJC USA’s initiatives focus on guiding newcomers to the
            US on essential aspects such as housing, education, and cultural
            integration to ease their settlement process. With a strong emphasis
            on volunteering and collaboration, JJC USA implements various
            programs and events, including workshops, seminars, and networking
            opportunities, all aimed at empowering and enriching the lives of
            Jain individuals in the United States. The organization’s unity and
            support create a welcoming and inclusive environment for its
            members, nurturing a sense of belonging and camaraderie among the
            Jain community in the US.
          </blockquote>
        </div>
      </div>
    </div>
  );
};

export default MiniAboutUs;
