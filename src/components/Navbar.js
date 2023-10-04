import React from 'react';
import { useIsAuthenticated } from 'react-auth-kit';
import './Navbar.css';
import UserNavbar from '../pages/user/UserNavbar';
import LandingNavbar from '../pages/landingpage/LandingNavbar';

function Navbar() {
  const isAuthenticated = useIsAuthenticated();
  return <>{isAuthenticated() ? <UserNavbar /> : <LandingNavbar />}</>;
}
export default Navbar;
