import React from 'react';
import ContactUs from './components/contactUs/ContactUs';
import NewsFeed from './components/newsFeed/NewsFeed';
import JJCMission from './components/jjcMission/JJCMission';
import Banner from './components/banner/Banner';
import LandingAboutUs from './components/landingAboutUs/LandingAboutUs';

function LandingHomepage() {
  return (
    <div>
      <Banner />
      <JJCMission />
      <LandingAboutUs />
      {/* <NewsFeed /> */}
      <ContactUs />
    </div>
  );
}
export default LandingHomepage;
