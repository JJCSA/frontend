import React from 'react';

import {
  jjcConnectIcon,
  jjcEngageIcon,
  jjcHelpIcon,
  jjcPlanIcon,
} from '../../../../assets/index';
import './JJCMission.scss';
import ScrollAnimation from 'react-animate-on-scroll';
import Typewriter from "typewriter-effect";

function JJCMission() {
  return (
    <div id="jjc-mission">
      <div className="container-fluid mission-color" id="leftpad">
        {/*<div className="col-lg-4 col-md-4 col-sm-12 col-xs-12 headtext pb-5">*/}
          <div className="headtext pb-5">
          <Typewriter
              options={{
                delay: 60
              }}
              onInit={(typewriter)=> {
                typewriter.typeString("JJC Student Association is there to guide you throughout your journey in the USA").start();
              }}
          />
          {/*<ScrollAnimation animateIn='fadeInDown' duration={2}>*/}
          {/*  JJC Student Association is there to guide you throughout your*/}
          {/*  journey in the USA*/}
          {/*</ScrollAnimation>*/}
        </div>
        <div className="row">
          <div className="col-sm-12 col-lg-2 ">
            <ScrollAnimation animateIn="bounceIn" animateOut="bounceOut" duration={2}>
            <div className="card mb-5 mission-card">
              <img
                className="card-img pt-4 card_images"
                src={jjcConnectIcon}
                alt="Connect Alumni"
              />
              <div className="card-body text-center">
                <h5 className="card-title">Connect</h5>
                <p className="card-text mission-text">
                  Find Alumnis in your Course and Universities
                </p>
              </div>
            </div>
            </ScrollAnimation>
          </div>
          <div className="col-sm-12 col-lg-2 ">
            <ScrollAnimation animateIn="bounceIn" animateOut="bounceOut" duration={2}>
            <div className="card mb-5 mission-card">
              <img
                className="card-img pt-4 card_images"
                src={jjcPlanIcon}
                alt="Connect Alumni"
              />
              <div className="card-body text-center">
                <h5 className="card-title">Plan & Advise </h5>
                <p className="card-text mission-text">
                  GRE, TOEFL, Loan, Accomodation
                </p>
              </div>
            </div>
            </ScrollAnimation>
          </div>
          <div className="col-sm-12 col-lg-2 ">
            <ScrollAnimation animateIn="bounceIn" animateOut="bounceOut" duration={2}>
            <div className="card mb-5 mission-card">
              <img
                className="card-img pt-4 card_images"
                src={jjcHelpIcon}
                alt="Connect Alumni"
              />
              <div className="card-body text-center">
                <h5 className="card-title">Get Help</h5>
                <p className="card-text mission-text">
                  Job Referrals, Resume & Cover letter tips
                </p>
              </div>
            </div>
            </ScrollAnimation>
          </div>
          <div className="col-sm-12 col-lg-2 ">
            <ScrollAnimation animateIn="bounceIn" animateOut="bounceOut" duration={2}>
            <div className="card mb-5 mission-card">
              <img
                className="card-img pt-4 card_images"
                src={jjcEngageIcon}
                alt="Connect Alumni"
              />
              <div className="card-body text-center">
                <h5 className="card-title">Engage</h5>
                <p className="card-text mission-text">
                  Find a community away from home!
                </p>
              </div>
            </div>
            </ScrollAnimation>
          </div>
        </div>
        <form className="form-inline pb-5">
          <button
            href="#"
            className="form-control btn btn-dark btn-block join-button"
            type="button"
          >
            Join Student Association Now
          </button>
        </form>
      </div>
    </div>
  );
}
export default JJCMission;
