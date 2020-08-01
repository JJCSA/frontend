import React, { Component } from 'react'
// import aboutUs from "./images/aboutUs.png"

import JJCMission from './JJCMission'
import AboutUsHeading from './AboutUsHeading'
import OngoingInitiativesHeading from './OngoingInitiativesHeading'
import Ongoinginitiativescarousel from './Ongoinginitiativescarousel'
import TestimonialsHeading from './TestimonialsHeading'
import NewsUpdatesHeading from './NewsUpdatesHeading'
import AboutUs from './AboutUs'
class Landing extends Component {
  render() {
    return (
      <div >

      
        <JJCMission/>
        <AboutUsHeading/>
        <AboutUs/>


        <OngoingInitiativesHeading/>
        
        <Ongoinginitiativescarousel/>
        <TestimonialsHeading/>
        <NewsUpdatesHeading/>
      </div> 
    )
  }
}

export default Landing


