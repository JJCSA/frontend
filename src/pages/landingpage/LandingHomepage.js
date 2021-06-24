import React from 'react';
import ContactUs from './components/contactUs/ContactUs';
import NewsFeed from './components/newsFeed/NewsFeed';
import LandingNavBar from '../../components/landingNavBar/LandingNavBar';
import JJCMission from './components/jjcMission/JJCMission';

function LandingHomepage() {
  return (
    <div>
      {/*<LandingNavBar />*/}
      <JJCMission />
      <NewsFeed />
      <ContactUs />
    </div>
  );
}
export default LandingHomepage;
