import React, { useState } from 'react';
import 'react-bootstrap-table-next/dist/react-bootstrap-table2.min.css';
import '@trendmicro/react-sidenav/dist/react-sidenav.css';
import './App.scss';

import { AuthProvider } from 'react-auth-kit';
import refreshApi from './helpers/refreshApi';
import GlobalContext from './store/GlobalContext';
import Routes from './Routes';
// import { AcceptRejectButton } from './components';


function App() {
  const [globalState, setGlobalState] = useState({ profile: null });

  const content = {
    message: "This website uses cookies to ensure you get the best experience on our website.",
    dismiss: "Got it!",
    link: "Learn more",
    href: "/cookies",
    allow: "Allow cookies",
  };

  return (
    // <><AcceptRejectButton
    //   content={content} />
      
      <GlobalContext.Provider value={{ globalState, setGlobalState }}>
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
      // </>
  );
}

export default App;
