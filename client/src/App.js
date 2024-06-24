import { useState, useEffect, useMemo } from "react";
import { Routes, Route, Navigate, useLocation } from "react-router-dom";
import { ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import Icon from "@mui/material/Icon";
import SoftBox from "./components/SoftBox";
import Sidenav from "./examples/Sidenav";
import Configurator from "./examples/Configurator";
import theme from "./assets/theme";
import rtlPlugin from "stylis-plugin-rtl";
import createCache from "@emotion/cache";
import 'react-toastify/dist/ReactToastify.css';
import { useSelector } from "react-redux";
import Department from "./layouts/department";

import Dashboard from "./layouts/dashboard";
import Tables from "./layouts/tables";
import Profile from "./layouts/profile";
import SignIn from "./layouts/authentication/sign-in";
import Events from "./layouts/events";
import News from "./layouts/news";
import Publication from "./layouts/publication";
import routes from "./routes";
import { 
  useSoftUIController, 
  setMiniSidenav, 
  setOpenConfigurator 
} from "./context";

import brand from "./assets/images/logos/logo.png";

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

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      {isAuth && (
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
      )}
      {layout === "vr" && <Configurator />}
      <Routes>
        {isAuth ? (
          <>
          <Route
          path="/"
          element={<Dashboard />}
        />
        <Route
          path="/tables"
          element={ <Tables />}
        />
        <Route
          path="/department"
          element={<Department /> }
        />
        <Route
          path="/news"
          element={<News />}
        />
        <Route
          path="/events"
          element={<Events /> }
        />
        <Route
          path="/publication"
          element={ <Publication />}
        />
        <Route
          path="/profile"
          element={ <Profile />}
        />
        </>
        ):(
          <Route path="/signin" element={<SignIn />} />
        )
      }
        {/* <Route path="/sign-in" element={<SignIn />} />
        <Route path="/sign-up" element={<SignUp />} /> */}
      </Routes>
    </ThemeProvider>
  );
}
