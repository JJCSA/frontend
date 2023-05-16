import React from 'react';
import ContactUs from './components/contactUs/ContactUs';
import NewsFeed from './components/newsFeed/NewsFeed';
import JJCMission from './components/jjcMission/JJCMission';
import Testimonial from './components/testimonial/Testimonial';

function LandingHomepage() {
  return (
    <div>
      <JJCMission />
      <NewsFeed />
      <Testimonial />
      <ContactUs />
    </div>
  );
}
export default LandingHomepage;
