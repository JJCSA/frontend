import React, {useEffect} from 'react';
import ContactUs from './components/contactUs/ContactUs';
import NewsFeed from './components/newsFeed/NewsFeed';
import JJCMission from './components/jjcMission/JJCMission';
import AboutUs from './components/aboutUs/AboutUs';
import MissionVision from './components/missionVision/MissionVision';
import withResponsive from '../responsive/withResponsive';

function LandingHomepage() {

  return (
      <div>
        <JJCMission />
        <AboutUs />
        <MissionVision />
        <NewsFeed />
        <ContactUs />
      </div>
  );
}
export default withResponsive(LandingHomepage);