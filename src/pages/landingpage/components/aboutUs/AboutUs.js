import React from 'react';
import MissionVision from '../missionVision/MissionVision';
import Volunteers from '../volunteers/Volunteers';
import Timeline from '../timeline/Timeline';
import MiniAboutUs from '../landingAboutUs/MiniAboutUs';
import Leadership from '../leadership/Leadership';

const AboutUs = () => {
  return (
    <div>
      <MiniAboutUs />
      <MissionVision />
      <Timeline />
      <Leadership />
    </div>
  );
};

export default AboutUs;
