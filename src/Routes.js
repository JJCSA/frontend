import React, { useContext, useState, useEffect } from 'react';
import {
  BrowserRouter,
  Routes as Switch,
  Route,
  Navigate,
} from 'react-router-dom';
import {
  RequireAuth,
  useIsAuthenticated,
  useAuthHeader,
  useSignOut,
} from 'react-auth-kit';

import GlobalContext from './store/GlobalContext';
import Navbar from './components/Navbar';
import Landing from './components/Landing';
// import Landing from './pages/landingpage/LandingHomepage';
import Login from './components/login/Login';
import Register from './components/register/Register';
import Profile from './components/Profile';
import AdminPanel from './pages/admin/AdminPanel';
import Footer from './components/footer/Footer';
import LandingHomepage from './pages/landingpage/LandingHomepage';

import Onboarding from './components/onBoarding/Onboarding';
import { getProfile } from './components/UserFunctions';
import Loader from './helpers/Loader';
import AdminHomepage from './pages/admin/AdminHomepage';
import UserManager from './pages/admin/components/userManager/UserManager';
import ForgotPassword from './components/forgotPassword/ForgotPassword';
import ForgotPasswordMessage from './components/forgotPasswordMessage/ForgotPasswordMessage';
import ResetPassword from './components/resetPassword/ResetPassword';
import AboutUs from './pages/landingpage/components/aboutUs/AboutUs';
import PrivacyPolicy from './components/privacyPolicy/PrivacyPolicy';
import TermsAndConditions from './components/termsAndConditions/TermsAndConditions';
import Volunteers from './pages/landingpage/components/volunteers/Volunteers';
import Faqs from './pages/user/components/faqs/Faqs';
import JjcEvents from './pages/user/components/jjcevents/JjcEvents';

function Routes() {
  const { globalState, setGlobalState } = useContext(GlobalContext);
  const authUser = globalState.profile;
  const isAuthenticated = useIsAuthenticated()();
  const authToken = useAuthHeader()();
  const signOutFunc = useSignOut();
  const [showNavbar, setShowNavbar] = useState(true);
  const [showFooter, setShowFooter] = useState(true);
  const [redirectPath, setRedirectPath] = useState(null);

  const toggleNavbar = toggle => {
    setShowNavbar(toggle);
  };

  const toggleFooter = toggle => {
    setShowFooter(toggle);
  };

  if (isAuthenticated && !authUser) {
    getProfile(authToken)
      .then(profile => {
        setGlobalState({
          ...globalState,
          profile: profile.data,
        });
      })
      .catch(() => {
        signOutFunc();
      });
    return <Loader />;
  }

  let routes;

  if (authUser && authUser.userStatus === 'NewUser') {
    routes = (
      <Switch>
        <Route
          path="/onboarding"
          element={
            <RequireAuth loginPath="/login">
              <Onboarding />
            </RequireAuth>
          }
        />
        <Route path="*" element={<Navigate to="/onboarding" replace />} />
      </Switch>
    );
  } else {
    routes = (
      <Switch>
        <Route path="/" element={<Landing />} />
        <Route path="/landing-home" element={<LandingHomepage />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/volunteers" element={<Volunteers />} />
        <Route
          path="/register"
          element={<Register toggleNavbar={toggleNavbar} />}
        />
        <Route
          path="/PrivacyPolicy"
          element={<PrivacyPolicy toggleNavbar={toggleNavbar} />}
        />
        <Route
          path="/TermsAndConditions"
          element={<TermsAndConditions toggleNavbar={toggleNavbar} />}
        />
        <Route
          path="/Faqs"
          element={
            <RequireAuth loginPath="/login">
              <Faqs />
            </RequireAuth>
          }
        />
        <Route
          path="/events"
          element={
            <RequireAuth loginPath="/login">
              <JjcEvents />
            </RequireAuth>
          }
        />
        <Route path="/login" element={<Login toggleNavbar={toggleNavbar} />} />
        <Route
          path="/profile"
          element={
            <RequireAuth loginPath="/login">
              <Profile />
            </RequireAuth>
          }
        />
        <Route
          path="/admin/"
          element={
            <RequireAuth loginPath="/login">
              <AdminPanel
                toggleNavbar={toggleNavbar}
                toggleFooter={toggleFooter}
              />
            </RequireAuth>
          }
        />
        <Route
          path="/forgotPassword"
          element={<ForgotPassword toggleNavbar={toggleNavbar} />}
        />
        <Route
          path="/forgotPasswordMessage"
          element={<ForgotPasswordMessage toggleNavbar={toggleNavbar} />}
        />
        <Route
          path="/ResetPassword"
          element={<ResetPassword toggleNavbar={toggleNavbar} />}
        />
        <Route
          path="/admin/"
          element={
            <RequireAuth loginPath="/login">
              <AdminPanel
                toggleNavbar={toggleNavbar}
                toggleFooter={toggleFooter}
              />
            </RequireAuth>
          }
        >
          <Route path="dashboard" element={<AdminHomepage />} />
          <Route path="manageUsers" element={<UserManager />} />
        </Route>
        <Route path="*" element={<Navigate to="/" replace />} />
      </Switch>
    );
  }
  return (
    <BrowserRouter>
      {showNavbar && <Navbar />}
      <div className="APP">{routes}</div>
      {showFooter && <Footer />}
    </BrowserRouter>
  );
}

export default Routes;
