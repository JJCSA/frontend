import React from 'react';
import { useKeycloak } from '@react-keycloak/web';
import { Route } from 'react-router-dom';

// eslint-disable-next-line react/prop-types
function PrivateRoute({ component: Component, ...rest }) {
  const { keycloak, initialized } = useKeycloak();
  if (!initialized) {
    return <div>Loading...</div>;
  }
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
