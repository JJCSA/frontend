import React, { useState } from 'react';
import 'react-bootstrap-table-next/dist/react-bootstrap-table2.min.css';
import '@trendmicro/react-sidenav/dist/react-sidenav.css';
import './App.scss';

import { AuthProvider } from 'react-auth-kit';
import refreshApi from './helpers/refreshApi';
import GlobalContext from './store/GlobalContext';
import Routes from './Routes';
<h1>React Responsive - a guide</h1>;

//Reponsive
import { useMediaQuery } from "react-responsive";

// Components
import { Desktop } from "./components/desktop/desktop.component";
import { Laptop } from "./components/laptop/laptop.component";
import { BigScreen } from "../src/components/big-screen/big-screen.component";
import { Mobile } from "../src/components/mobile/mobile.component";
import { TabletMobile } from "../src/components/tablet-mobile/tablet-mobile.component";

//responsive

function App() {
  const [globalState, setGlobalState] = useState({ profile: null });

  // Start Responsive Webiste

  const isMobileDevice = useMediaQuery({
    query: "(min-device-width: 480px)",
  });

  const isTabletDevice = useMediaQuery({
    query: "(min-device-width: 768px)",
  });

  const isLaptop = useMediaQuery({
    query: "(min-device-width: 1024px)",
  });

  const isDesktop = useMediaQuery({
    query: "(min-device-width: 1200px)",
  });

  const isBigScreen = useMediaQuery({
    query: "(min-device-width: 1201px )",
  });

  // end of responsive website

  return (

    <><div className='App'>
      <h1>React Responsive - a guide</h1>
      {isMobileDevice && <Mobile />}
      {isTabletDevice && <>
        <TabletMobile />
        {isDesktop && <Desktop />}
        {isLaptop && <Laptop />}
        {isBigScreen && <BigScreen />}
      </>}

    </div>
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
      </GlobalContext.Provider></>
  );
}

export default App;
