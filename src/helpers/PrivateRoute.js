import React from 'react';
import { useKeycloak } from '@react-keycloak/web';
import { Route } from 'react-router-dom';
import Loader from './Loader';

function PrivateRoute({ component: Component, ...rest }) {
  const { keycloak, initialized } = useKeycloak();
  if (!initialized) {
    return <Loader />;
  }
  console.log(keycloak);
  return (
    <Route
      {...rest}
      render={(props) => (
        keycloak.authenticated ? <Component {...props} /> : keycloak.login()
      )}
    />
  );
}

export default PrivateRoute;
