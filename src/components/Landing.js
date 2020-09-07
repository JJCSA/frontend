import React, { Component } from 'react'
// import aboutUs from "./images/aboutUs.png"

import JJCMission from './JJCMission'
import AboutUsHeading from './AboutUsHeading'
import AboutUs from './AboutUs'
import OngoingInitiativesHeading from './OngoingInitiativesHeading'
// import OngoingInitiativesCarousel from './Ongoinginitiativescarousel'
import OI from "./oi";
import TestimonialsHeading from './TestimonialsHeading'
// import TestimonialsCarousel from "./TestimonialsCarousel";
import TT from './tt'
import NewsUpdatesHeading from './NewsUpdatesHeading'
import NewsUpdates from './NewsUpdates'
import ContactUsHeading from "./ContactUsHeading";
import ContactUs from './ContactUs'

class Landing extends Component {
  render() {
    return (
      <div >

      
        <JJCMission/>
        <AboutUsHeading/>
        <AboutUs/>


        <OngoingInitiativesHeading/>
        
        {/*<OngoingInitiativesCarousel/>*/}
        <OI/>
        <TestimonialsHeading/>
        {/*<TestimonialsCarousel/>*/}
        <TT/>
        <NewsUpdatesHeading/>
        <NewsUpdates/>
        <ContactUsHeading/>
        <ContactUs/>
      </div> 
    )
  }
}

export default Landing


