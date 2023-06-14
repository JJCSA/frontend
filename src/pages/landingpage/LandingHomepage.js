import React from 'react';
import ContactUs from './components/contactUs/ContactUs';
import NewsFeed from './components/newsFeed/NewsFeed';
import JJCMission from './components/jjcMission/JJCMission';
import Banner from './components/banner/Banner';
import AboutUs from './components/aboutUs/AboutUs';
import MissionVision from './components/missionVision/MissionVision';
import Timeline from './components/timeline/Timeline';
import Testimonial from './components/testimonial/Testimonial';

function LandingHomepage() {
  return (
    <div>
      <Banner />
      <JJCMission />
      <AboutUs />
      <Timeline />
      <MissionVision />
      <NewsFeed />
      <Testimonial />
      <ContactUs />
    </div>
  );
}
export default LandingHomepage;
