import React from 'react';
import { useIsAuthenticated } from 'react-auth-kit';
import UserHomepage from '../pages/user/UserHomepage';
import LandingHomepage from '../pages/landingpage/LandingHomepage';

function Landing() {
  const isAuthenticated = useIsAuthenticated();
  return (
    <>{isAuthenticated() ? <UserHomepage /> : <LandingHomepage />}</>
  // <div className="container">
  //   <div className="jumbotron mt-5">
  //     <div className="col-sm-8 mx-auto">
  //       <h1 className="text-center">WELCOME</h1>
  //     </div>
  //   </div>
  // </div>
  );
}

export default Landing;
