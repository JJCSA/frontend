import React, { useContext, useState } from 'react';
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';
import { PrivateRoute } from 'react-auth-kit';

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

function Routes() {
  const authUser = useContext(GlobalContext).globalState.profile;
  const [showNavbar, setShowNavbar] = useState(true);
  const [showFooter, setShowFooter] = useState(true);

  const toggleNavbar = (toggle) => {
    setShowNavbar(toggle);
  };

  const toggleFooter = (toggle) => {
    setShowFooter(toggle);
  };

  let routes;

  if (authUser && authUser.userStatus === 'NewUser') {
    routes = (
      <Switch>
        <PrivateRoute exact path="/onboarding" component={Onboarding} loginPath="/login" />
        <Route path="/" render={() => (<Redirect to="/onboarding" />)} />
      </Switch>
    );
  } else {
    routes = (
      <Switch>
        <Route exact path="/" component={Landing} />
        <Route exact path="/landing-home" component={LandingHomepage} />
        <Route exact path="/register" component={() => <Register toggleNavbar={toggleNavbar} />} />
        <Route exact path="/login" component={() => <Login toggleNavbar={toggleNavbar} />} />
        <PrivateRoute exact path="/profile" component={Profile} loginPath="/login" />
        <PrivateRoute exact path="/admin" component={() => <AdminPanel toggleNavbar={toggleNavbar} toggleFooter={toggleFooter} />} loginPath="/login" />
        <Route path="/" render={() => (<Redirect to="/" />)} />
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
