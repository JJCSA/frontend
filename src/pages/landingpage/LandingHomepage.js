import React, { Component } from "react";
import ContactUs from "./components/contactUs/ContactUs";
import NewsFeed from "./components/newsFeed/NewsFeed";
import LandingNavBar from "../../components/landingNavBar/LandingNavBar";
import JJCMission from "./components/jjcMission/JJCMission";
class LandingHomepage extends React.Component {
  render() {
    return (
      <div>
        <LandingNavBar />
        <JJCMission />
        <NewsFeed />
        <ContactUs />
      </div>
    );
  }
}
export default LandingHomepage;
