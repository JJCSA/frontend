import React from 'react';
import ContactUs from './components/contactUs/ContactUs';
import NewsFeed from './components/newsFeed/NewsFeed';
import JJCMission from './components/jjcMission/JJCMission';
import Banner from './components/banner/Banner';
import AboutUs from './components/aboutUs/AboutUs';
import MissionVision from './components/missionVision/MissionVision';

function LandingHomepage() {
  return (
    <div>
      <Banner />
      <JJCMission />
      <AboutUs />
      <MissionVision />
      <NewsFeed />
      <ContactUs />
    </div>
  );
}
export default LandingHomepage;
