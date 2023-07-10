import React from 'react';
import ContactUs from './components/contactUs/ContactUs';
import JJCMission from './components/jjcMission/JJCMission';
import Testimonial from './components/testimonial/Testimonial';
import Banner from './components/banner/Banner';
import AboutUs from './components/aboutUs/AboutUs';

function LandingHomepage() {
  return (
    <div>
      <Banner />
      <JJCMission />
      <AboutUs />
      <Testimonial />
      <ContactUs />
    </div>
  );
}
export default LandingHomepage;
