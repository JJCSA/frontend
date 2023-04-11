import React, { useState } from 'react';
import 'react-bootstrap-table-next/dist/react-bootstrap-table2.min.css';
import '@trendmicro/react-sidenav/dist/react-sidenav.css';
import './App.scss';

import { AuthProvider } from 'react-auth-kit';
import refreshApi from './helpers/refreshApi';
import GlobalContext from './store/GlobalContext';
import Routes from './Routes';
import NotificationProvider from './utils/toast';

function App() {
  const [globalState, setGlobalState] = useState({ profile: null });

  return (
    <GlobalContext.Provider value={{ globalState, setGlobalState }}>
      <NotificationProvider>
      <AuthProvider
        authType="cookie"
        authName="_auth"
        cookieDomain={window.location.hostname}
        cookieSecure={window.location.protocol === 'https:'}
        refresh={refreshApi}
      >
        <Routes />
      </AuthProvider>
      </NotificationProvider>
    </GlobalContext.Provider>
  );
}

export default App;
