import React from 'react';
import 'react-bootstrap-table-next/dist/react-bootstrap-table2.min.css';
import '@trendmicro/react-sidenav/dist/react-sidenav.css';
import './App.scss';

import { AuthProvider } from 'react-auth-kit';
import Routes from './Routes';

function App() {
  return (
    <AuthProvider
      authType="cookie"
      authName="_auth"
      cookieDomain={window.location.hostname}
      cookieSecure={window.location.protocol === 'https:'}
      refreshToken
    >
      <Routes />
    </AuthProvider>
  );
}

export default App;
