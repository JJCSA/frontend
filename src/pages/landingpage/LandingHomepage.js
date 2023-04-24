import React, {useEffect} from 'react';
import ContactUs from './components/contactUs/ContactUs';
import NewsFeed from './components/newsFeed/NewsFeed';
import JJCMission from './components/jjcMission/JJCMission';
import AboutUs from './components/aboutUs/AboutUs';

function LandingHomepage() {

  return (
    <div>
      <JJCMission />
      <AboutUs />
      <NewsFeed />
      <ContactUs />
    </div>
  );
}
export default LandingHomepage;
