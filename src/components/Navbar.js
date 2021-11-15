import React from 'react';
import { useIsAuthenticated } from 'react-auth-kit';
import './Navbar.scss';
import UserNavbar from '../pages/user/UserNavbar';
import LandingNavbar from '../pages/landingpage/LandingNavbar';
import AdminNavbar from '../pages/admin/AdminNavbar';

function Navbar() {
  const isAuthenticated = useIsAuthenticated();
  return (
  <>
    {isAuthenticated() ? <UserNavbar /> : <LandingNavbar />}
    {/*<AdminNavbar />*/}
  </>

  );
}
export default Navbar;
