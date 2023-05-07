import React from 'react';
import ContactUs from './components/contactUs/ContactUs';
import NewsFeed from './components/newsFeed/NewsFeed';
import JJCMission from './components/jjcMission/JJCMission';
import Banner from './components/banner/Banner';

function LandingHomepage() {
  return (
    <div>
      <Banner />
      <JJCMission />
      <NewsFeed />
      <ContactUs />
    </div>
  );
}
export default LandingHomepage;
