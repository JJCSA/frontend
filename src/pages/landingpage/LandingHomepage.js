import React, {useEffect} from 'react';
import ContactUs from './components/contactUs/ContactUs';
import NewsFeed from './components/newsFeed/NewsFeed';
import JJCMission from './components/jjcMission/JJCMission';
<<<<<<< HEAD
=======
import Banner from './components/banner/Banner';
import AboutUs from './components/aboutUs/AboutUs';
import MissionVision from './components/missionVision/MissionVision';
>>>>>>> 25707d8 (Banner (#128))

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
