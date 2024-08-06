import React from 'react';
import './MissionVision.css';

const NewMissionVision = () => {
  return (
    <div id="mission-vision" className="MISSIONVISION">
      <div className="text-center mt-5">
        <h4>MISSION AND VISION</h4>
        <hr className="mission-vision" />
      </div>

      <div className="container mt-5">
        <div className="card mb-4">
          <div className="card-body">
            <h4 className="card-title vision-title">Our Vision</h4>
            <p className="card-text">
              To be an inclusive Jain organisation in the United States that
              provides support, guidance, and valuable resources to students and
              alumni.
            </p>
          </div>
        </div>

        <div className="card mb-4">
          <div className="card-body">
            <h4 className="card-title vision-title">Our Mission</h4>
            <p className="card-text">
              Our mission is to provide a platform to facilitate community
              engagement amongst Jain students and alumni across the United
              States. We help members attain professional growth by organizing
              events and interactive Q and A’s. We also enable social support
              systems to navigate through transitions in the USA.
            </p>
          </div>
        </div>

        <div className="card">
          <div className="card-body">
            <h4 className="card-title vision-title">External Objectives</h4>
            <ol className="card-text">
              <li>
                Provide opportunities to build social connections through local
                meet-ups, virtual events, and social media groups.
              </li>
              <li>
                Create opportunities for professional growth and career
                development through events like "alumni symposiums" and "tips to
                ace your interview," etc.
              </li>
              <li>
                Ease transitions for new students coming to the United States of
                America by facilitating programs like the buddy project.
              </li>
              <li>
                Strengthen the community by creating associations with fellow
                Jain organizations.
              </li>
            </ol>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewMissionVision;
