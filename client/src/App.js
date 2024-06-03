import { useState, useEffect, useMemo } from "react";
import { Routes, Route, Navigate, useLocation } from "react-router-dom";
import { ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import Icon from "@mui/material/Icon";
import SoftBox from "./components/SoftBox";
import Sidenav from "./examples/Sidenav";
import Configurator from "./examples/Configurator";
import theme from "./assets/theme";
import themeRTL from "./assets/theme/theme-rtl";
import rtlPlugin from "stylis-plugin-rtl";
import { CacheProvider } from "@emotion/react";
import createCache from "@emotion/cache";
import 'react-toastify/dist/ReactToastify.css';
import { useSelector } from "react-redux";

import Dashboard from "./layouts/dashboard";
import Tables from "./layouts/tables";
import Billing from "./layouts/billing";
import VirtualReality from "./layouts/virtual-reality";
import RTL from "./layouts/rtl";
import Profile from "./layouts/profile";
import SignIn from "./layouts/authentication/sign-in";
import SignUp from "./layouts/authentication/sign-up";
// import Slides from "./layouts/slides";
import Shop from "./examples/Icons/Shop";
import Office from "./examples/Icons/Office";
import Settings from "./examples/Icons/Settings";
import Document from "./examples/Icons/Document";
import SpaceShip from "./examples/Icons/SpaceShip";
import CustomerSupport from "./examples/Icons/CustomerSupport";
import CreditCard from "./examples/Icons/CreditCard";
import Cube from "./examples/Icons/Cube";

import routes from "./routes";

// Soft UI Dashboard React contexts
import { useSoftUIController, setMiniSidenav, setOpenConfigurator } from "./context";

// Images
import brand from "./assets/images/logo-ct.png";

export default function App() {
  const [controller, dispatch] = useSoftUIController();
  const { miniSidenav, direction, layout, openConfigurator, sidenavColor } = controller;
  const [onMouseEnter, setOnMouseEnter] = useState(false);
  const [rtlCache, setRtlCache] = useState(null);
  const { pathname } = useLocation();
  const isAuth = useSelector((state) => state.token);


  // Cache for the rtl
  useMemo(() => {
    const cacheRtl = createCache({
      key: "rtl",
      stylisPlugins: [rtlPlugin],
    });

    setRtlCache(cacheRtl);
  }, []);
  const handleOnMouseEnter = () => {
    if (miniSidenav && !onMouseEnter) {
      setMiniSidenav(dispatch, false);
      setOnMouseEnter(true);
    }
  };
  const handleOnMouseLeave = () => {
    if (onMouseEnter) {
      setMiniSidenav(dispatch, true);
      setOnMouseEnter(false);
    }
  };

  const handleConfiguratorOpen = () => setOpenConfigurator(dispatch, !openConfigurator);
  useEffect(() => {
    document.body.setAttribute("dir", direction);
  }, [direction]);
  useEffect(() => {
    document.documentElement.scrollTop = 0;
    document.scrollingElement.scrollTop = 0;
  }, [pathname]);
  const dname = "Dashboard";

  // const getRoutes = (allRoutes) =>
  //   allRoutes.map((route) => {
  //     if (route.collapse) {
  //       return getRoutes(route.collapse);
  //     }

  //     if (route.route) {
  //       return <Route exact path={route.route} element={route.component} key={route.key} />;
  //     }

  //     return null;
  //   });

  const configsButton = (
    <SoftBox
      display="flex"
      justifyContent="center"
      alignItems="center"
      width="3.5rem"
      height="3.5rem"
      bgColor="white"
      shadow="sm"
      borderRadius="50%"
      position="fixed"
      right="2rem"
      bottom="2rem"
      zIndex={99}
      color="dark"
      sx={{ cursor: "pointer" }}
      onClick={handleConfiguratorOpen}
    >
      <Icon fontSize="default" color="inherit">
        settings
      </Icon>
    </SoftBox>
  );

  return  (
    <ThemeProvider theme={theme}>
      <CssBaseline />
        <>
          <Sidenav
            color={sidenavColor}
            brand={brand}
            brandName="BU ADMIN"
            routes={routes}
            onMouseEnter={handleOnMouseEnter}
            onMouseLeave={handleOnMouseLeave}
          />
          <Configurator />
          {configsButton}
        </>
      {layout === "vr" && <Configurator />}
      <Routes>
          
          <Route path="/" element={<SignIn />} />
          <Route
            path="/dashboard" 
            element={isAuth ? <Dashboard/> : <Navigate to="/"/>}
          />
          <Route
            path="/tables" 
            element={isAuth ? <Tables /> : <Navigate to="/"/>}
          />
          <Route
            path="/billing" 
            element={isAuth ? <Billing /> : <Navigate to="/"/>}
          />
          <Route
            path="/virtual-reality" 
            element={isAuth ? <VirtualReality /> : <Navigate to="/"/>}
          />
          <Route
            exact
            path="/rtl" 
            element={isAuth ? <RTL /> : <Navigate to="/"/>}
          />
          <Route
            path="/profile" 
            element={isAuth ? <Profile /> : <Navigate to="/"/>}
          />
          <Route
            exact
            path="/sign-in" 
            element={<SignIn />}
          />
          <Route
            path="/sign-up" 
            element={<SignUp />}
          />
          
        </Routes>
    </ThemeProvider>
  );
}
