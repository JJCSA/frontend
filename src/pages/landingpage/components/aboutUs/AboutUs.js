import React from 'react';
import MissionVision from '../missionVision/MissionVision';
import Volunteers from '../volunteers/Volunteers';
import Timeline from '../timeline/Timeline';
import MiniAboutUs from '../landingAboutUs/MiniAboutUs';

const AboutUs = () => {
  return (
    <div>
      <MiniAboutUs />
      <MissionVision />
      <Timeline />
      <Volunteers />
    </div>
  );
};

export default AboutUs;
