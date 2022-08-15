import React, { useContext, useState } from 'react';
import { BrowserRouter as Router, Routes as Switch, Route, Navigate } from 'react-router-dom';
import { RequireAuth, useIsAuthenticated, useAuthHeader, useSignOut } from 'react-auth-kit';

import GlobalContext from './store/GlobalContext';
import Navbar from './components/Navbar';
import Landing from './components/Landing';
// import Landing from './pages/landingpage/LandingHomepage';
import Login from './components/Login/Login';
import Register from './components/Register/Register';
import Profile from './components/Profile';
import AdminPanel from './pages/admin/AdminPanel';
import Footer from './components/Footer/Footer';
import LandingHomepage from './pages/landingpage/LandingHomepage';
import Onboarding from './components/Onboarding/Onboarding';
import { getProfile } from './components/UserFunctions';
import Loader from './helpers/Loader';
import AdminHomepage from './pages/admin/AdminHomepage';
import UserManager from './pages/admin/UserManager';

function Routes() {
  const { globalState, setGlobalState } = useContext(GlobalContext);
  const authUser = globalState.profile;
  const isAuthenticated = useIsAuthenticated()();
  const authToken = useAuthHeader()();
  const signOutFunc = useSignOut();
  const [showNavbar, setShowNavbar] = useState(true);
  const [showFooter, setShowFooter] = useState(true);

  const toggleNavbar = (toggle) => {
    setShowNavbar(toggle);
  };

  const toggleFooter = (toggle) => {
    setShowFooter(toggle);
  };

  if (isAuthenticated && !authUser) {
    getProfile(authToken).then((profile) => {
      setGlobalState({
        ...globalState,
        profile: profile.data,
      });
    }).catch(() => {
      signOutFunc();
    });
    return (<Loader />);
  }

  let routes;

  if (authUser && authUser.userStatus === 'NewUser') {
    routes = (
      <Switch>
        <Route path="/onboarding" element={<RequireAuth loginPath="/login"><Onboarding /></RequireAuth>} />
        <Route path="*" element={<Navigate to="/onboarding" replace />} />
      </Switch>
    );
  } else {
    routes = (
      <Switch>
        <Route path="/" element={<Landing />} />
        <Route path="/landing-home" element={<LandingHomepage />} />
        <Route path="/register" element={<Register toggleNavbar={toggleNavbar} />} />
        <Route path="/login" element={<Login toggleNavbar={toggleNavbar} />} />
        <Route path="/profile" element={<RequireAuth loginPath="/login"><Profile /></RequireAuth>} />
        <Route path="/admin/" element={<RequireAuth loginPath="/login"><AdminPanel toggleNavbar={toggleNavbar} toggleFooter={toggleFooter} /></RequireAuth>}>
          <Route path="dashboard" element={<AdminHomepage />} />
          <Route path="manageUsers" element={<UserManager />} />
        </Route>
        <Route path="*" element={<Navigate to="/" replace />} />
      </Switch>
    );
  }

  return (
    <Router>
      {showNavbar && <Navbar />}
      <div className="APP">
        {routes}
      </div>
      {showFooter && <Footer />}
    </Router>
  );
}

export default Routes;
