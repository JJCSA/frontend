import React from 'react';
import MissionVision from '../missionVision/MissionVision';
import Trustees from '../trustees/Trustees';
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
      <Trustees />
    </div>
  );
};

export default AboutUs;
