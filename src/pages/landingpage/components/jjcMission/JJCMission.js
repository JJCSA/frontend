import React from 'react';
import { Link } from 'react-router-dom';
import './JJCMission.css';
import ScrollAnimation from 'react-animate-on-scroll';
import Typewriter from 'typewriter-effect';
import {
  jjcConnectIcon,
  jjcEngageIcon,
  jjcHelpIcon,
  jjcPlanIcon,
} from '../../../../assets/index';

function JJCMission() {
  return (
    <div id="jjc-mission" className="JJCMISSION">
      <div className="container-fluid mission-color">
        <div className="headtext pb-5">
          <Typewriter
            options={{
              delay: 120,
              strings: [
                'JJC USA IS THERE TO GUIDE YOU THROUGHOUT YOUR JOURNEY IN THE USA',
              ],
              loop: true,
              autoStart: true,
            }}
            onInit={typewriter => {
              typewriter
                .typeString(
                  'JJC USA IS THERE TO GUIDE YOU THROUGHOUT YOUR JOURNEY IN THE USA'
                )
                .callFunction(state => {
                  state.elements.cursor.setAttribute('hidden', 'hidden');
                  typewriter.stop();
                })
                .start();
            }}
          />
        </div>
        <div className="card-deck">
          <div className="col-sm-12 col-md-6 col-lg-3 mb-5">
            <ScrollAnimation
              animateIn="bounceIn"
              animateOut="bounceOut"
              duration={2}
            >
              <div className="card mission-card h-100">
                <img
                  className="card-img-top pt-4 card_images"
                  src={jjcConnectIcon}
                  alt="Connect Alumni"
                />
                <div className="card-body text-center">
                  <h5 className="card-title">Connect</h5>
                  <p className="card-text">
                    To connect Jain Student&apos;s / Alumni&apos;s across USA{' '}
                    <br />
                    <br />
                  </p>
                </div>
              </div>
            </ScrollAnimation>
          </div>
          <div className="col-sm-12 col-md-6 col-lg-3 mb-5">
            <ScrollAnimation
              animateIn="bounceIn"
              animateOut="bounceOut"
              duration={2}
            >
              <div className="card mission-card h-100">
                <img
                  className="card-img-top pt-4 card_images"
                  src={jjcPlanIcon}
                  alt="empower"
                />
                <div className="card-body text-center">
                  <h5 className="card-title">Empower</h5>
                  <p className="card-text">
                    To empower fellow jains and prepare them for future
                    challenges
                  </p>
                </div>
              </div>
            </ScrollAnimation>
          </div>
          <div className="col-sm-12 col-md-6 col-lg-3 mb-5">
            <ScrollAnimation
              animateIn="bounceIn"
              animateOut="bounceOut"
              duration={2}
            >
              <div className="card mission-card h-100">
                <img
                  className="card-img-top pt-4 card_images"
                  src={jjcEngageIcon}
                  alt="mentor"
                />
                <div className="card-body text-center">
                  <h5 className="card-title">Mentor</h5>
                  <p className="card-text">
                    To mentor each other and achieve mutual growth
                    <br />
                    <br />
                  </p>
                </div>
              </div>
            </ScrollAnimation>
          </div>
          <div className="col-sm-12 col-md-6 col-lg-3 mb-5">
            <ScrollAnimation
              animateIn="bounceIn"
              animateOut="bounceOut"
              duration={2}
            >
              <div className="card mission-card h-100">
                <img
                  className="card-img-top pt-4 card_images"
                  src={jjcHelpIcon}
                  alt="assist"
                />
                <div className="card-body text-center">
                  <h5 className="card-title">Assist</h5>
                  <p className="card-text">
                    To assist students in their personal and professional lives
                    while in USA
                  </p>
                </div>
              </div>
            </ScrollAnimation>
          </div>
        </div>
        <form className="form-inline pb-5">
          <Link
            to="/register"
            className="form-control btn btn-light btn-block mx-auto login-button"
          >
            JOIN JJC USA NOW
          </Link>
        </form>
      </div>
    </div>
  );
}
export default JJCMission;
