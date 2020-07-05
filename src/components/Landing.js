import React, { Component } from 'react'
// import aboutUs from "./images/aboutUs.png"

import JJCMission from './JJCMission'
import AboutUsHeading from './AboutUsHeading'
import OngoingInitiativesHeading from './OngoingInitiativesHeading'
import Ongoinginitiativescarousel from './Ongoinginitiativescarousel'
import TestimonialsHeading from './TestimonialsHeading'
import NewsUpdatesHeading from './NewsUpdatesHeading'

class Landing extends Component {
  render() {
    return (
      <div>

      
        <JJCMission/>
        <AboutUsHeading/>



        <OngoingInitiativesHeading/>
        
        <Ongoinginitiativescarousel/>
        <TestimonialsHeading/>
        <NewsUpdatesHeading/>
      </div> 
    )
  }
}

export default Landing


