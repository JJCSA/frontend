import React, {useState} from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import 'react-bootstrap-table-next/dist/react-bootstrap-table2.min.css';
import './App.scss';
import './components/Footer/Footer';

import { AuthProvider, PrivateRoute } from 'react-auth-kit';

import Navbar from './components/Navbar';
import Landing from './components/Landing';
// import Landing from './pages/landingpage/LandingHomepage';
import Login from './components/Login/Login';
import Register from './components/Register/Register';
import Profile from './components/Profile';
import AdminPanel from './pages/admin/AdminPanel';
import Footer from "./components/Footer/Footer";

function App() {
  const [showNavbar, setShowNavbar] = useState(true);

  const toggleNavbar = (toggle) => {
    setShowNavbar(toggle);
  }

  return (
    <AuthProvider
      authType="cookie"
      authName="_auth"
      cookieDomain={window.location.hostname}
      cookieSecure={window.location.protocol === 'https:'}
      refreshToken
    >
      <Router>
        {showNavbar && <Navbar />}
        <div className="APP">
          <Switch>
            <Route exact path="/" component={Landing} />
            <Route path="/register" component={() => <Register toggleNavbar={toggleNavbar} />} />
            <Route path="/login" component={() => <Login toggleNavbar={toggleNavbar} />} />
            <PrivateRoute path="/profile" component={Profile} loginPath="/login" />
            <PrivateRoute path="/admin" component={AdminPanel} loginPath="/login" />
          </Switch>
        </div>
        <Footer />
      </Router>
    </AuthProvider>
  );
}

export default App;
