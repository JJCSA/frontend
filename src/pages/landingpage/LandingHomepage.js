import React from 'react';
import ContactUs from './components/contactUs/ContactUs';
import NewsFeed from './components/newsFeed/NewsFeed';
import JJCMission from './components/jjcMission/JJCMission';
import Banner from './components/banner/Banner';
import AboutUs from './components/aboutUs/AboutUs';
import Leadership from './components/leadership/Leadership';

function LandingHomepage() {
  return (
    <div>
      <Banner />
      <JJCMission />
      <AboutUs />
      <Leadership />
      <NewsFeed />
      <ContactUs />
    </div>
  );
}
export default LandingHomepage;
