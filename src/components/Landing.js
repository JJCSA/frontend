import React, { Component } from 'react'
// import aboutUs from "./images/aboutUs.png"

import JJCMission from './JJCMission'
import AboutUsHeading from './AboutUsHeading'
import AboutUs from './AboutUs'
import OngoingInitiativesHeading from './OngoingInitiativesHeading'
import OngoingInitiativesCarousel from './Ongoinginitiativescarousel'
import TestimonialsHeading from './TestimonialsHeading'
import TestimonialsCarousel from "./TestimonialsCarousel";
import NewsUpdatesHeading from './NewsUpdatesHeading'
import NewsUpdates from './NewsUpdates'
import ContactUsHeading from "./ContactUsHeading";

class Landing extends Component {
  render() {
    return (
      <div >

      
        <JJCMission/>
        <AboutUsHeading/>
        <AboutUs/>


        <OngoingInitiativesHeading/>
        
        <OngoingInitiativesCarousel/>
        <TestimonialsHeading/>
        <TestimonialsCarousel/>
        <NewsUpdatesHeading/>
        <NewsUpdates/>
        <ContactUsHeading/>
      </div> 
    )
  }
}

export default Landing


