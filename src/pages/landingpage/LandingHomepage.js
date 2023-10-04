import React, { useEffect } from 'react';
import ContactUs from './components/contactUs/ContactUs';
import NewsFeed from './components/newsFeed/NewsFeed';
import JJCMission from './components/jjcMission/JJCMission';
import AboutUs from './components/aboutUs/AboutUs';
import MissionVision from './components/missionVision/MissionVision';
// import withResponsive from '../responsive/withResponsive';
// import { useMediaQuery } from "react-responsive";
import Timeline from './components/timeline/Timeline';
import Testimonial from './components/testimonial/Testimonial';

function LandingHomepage() {

  // const isDesktopOrLaptop = useMediaQuery({
  //   query: '(min-device-width: 1224px)'
  // })
  // const isBigScreen = useMediaQuery({ query: '(min-device-width: 1824px)' })
  // const isTabletOrMobile = useMediaQuery({ query: '(max-width: 1224px)' })
  // const isTabletOrMobileDevice = useMediaQuery({
  //   query: '(max-device-width: 1224px)'
  // })
  // const isPortrait = useMediaQuery({ query: '(orientation: portrait)' })
  // const isRetina = useMediaQuery({ query: '(min-resolution: 2dppx)' })

  return (
    <div>
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