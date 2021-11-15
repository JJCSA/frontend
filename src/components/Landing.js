import React from 'react';
import { useIsAuthenticated } from 'react-auth-kit';
import UserHomepage from '../pages/user/UserHomepage';
import LandingHomepage from '../pages/landingpage/LandingHomepage';

function Landing() {
  const isAuthenticated = useIsAuthenticated();
  return (
    <>{isAuthenticated() ? <UserHomepage /> : <LandingHomepage />}</>
  );
}

export default Landing;
