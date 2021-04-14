import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import 'react-bootstrap-table-next/dist/react-bootstrap-table2.min.css';
import './App.scss';

import { ReactKeycloakProvider } from '@react-keycloak/web';
import Keycloak from 'keycloak-js';

import Navbar from './components/Navbar';
// import Landing from './components/Landing';
import Landing from './pages/landingpage/LandingHomepage';
import Login from './components/Login/Login';
import Register from './components/Register/Register';
import Profile from './components/Profile';
import AdminPanel from './pages/admin/AdminPanel';
import PrivateRoute from './helpers/PrivateRoute';
import { config } from './utils/constants';

function App() {
  const keycloak = new Keycloak({
    url: `${config.url.KEYCLOAK_BASE_URL}/auth`,
    realm: 'jjcsa-services',
    clientId: 'jjcsa',
  });
  const initOptions = { pkceMethod: 'S256' };

  const handleOnEvent = async (event, error) => {
    console.log(event, error);
    if (event === 'onAuthSuccess') {
      if (keycloak.authenticated) {
        console.log('Authenticated');
      }
    }
  };

  return (
    <ReactKeycloakProvider
      authClient={keycloak}
      initOptions={initOptions}
      onEvent={(event, error) => handleOnEvent(event, error)}
    >
      <Router>
        <Navbar />
        <div className="APP containter">
          <Switch>
            <Route exact path="/" component={Landing} />
            <Route path="/register" component={Register} />
            <Route path="/login" component={Login} />
            <PrivateRoute path="/profile" component={Profile} />
            <PrivateRoute path="/admin" component={AdminPanel} />
          </Switch>
        </div>
      </Router>
    </ReactKeycloakProvider>
  );
}

export default App;
