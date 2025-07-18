import React, { useState } from 'react';
import 'react-bootstrap-table-next/dist/react-bootstrap-table2.min.css';
import '@trendmicro/react-sidenav/dist/react-sidenav.css';
import './App.css';

import { AuthProvider } from 'react-auth-kit';
import { ToastContainer } from 'react-toastify';
import refreshApi from './helpers/refreshApi';
import GlobalContext from './store/GlobalContext';
import Routes from './Routes';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  const [globalState, setGlobalState] = useState({ profile: null });
  const isNonProd = process.env.REACT_APP_NODE_ENV !== 'production';

  return (
    <GlobalContext.Provider value={{ globalState, setGlobalState }}>
      {isNonProd && (
        <h3>
          Running application in <b>{process.env.REACT_APP_NODE_ENV}</b>{' '}
          environment.
        </h3>
      )}
      <ToastContainer
        position="top-center"
        autoClose={2000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
      />
      <AuthProvider
        authType="cookie"
        authName="_auth"
        cookieDomain={window.location.hostname}
        cookieSecure={window.location.protocol === 'https:'}
        refresh={refreshApi}
      >
        <Routes />
      </AuthProvider>
    </GlobalContext.Provider>
  );
}

export default App;
