import React, {useEffect} from 'react';
import ContactUs from './components/contactUs/ContactUs';
import NewsFeed from './components/newsFeed/NewsFeed';
import JJCMission from './components/jjcMission/JJCMission';

function LandingHomepage() {

  return (
    <div>
      <JJCMission />
      <MissionVision />
      <NewsFeed />
      <ContactUs />
    </div>
  );
}
export default LandingHomepage;
