import { useEffect } from "react";

// react-router-dom components
import { useLocation } from "react-router-dom";

// prop-types is a library for typechecking of props.
import PropTypes from "prop-types";

// Soft UI Dashboard React components
import SoftBox from "../../../components/SoftBox";

// Soft UI Dashboard React context
import { useSoftUIController, setLayout } from "../../../context";
import backgroundImage from "../../../assets/images/curved-images/curved14.jpg";

function DashboardLayout({ children }) {
  const [controller, dispatch] = useSoftUIController();
  const { miniSidenav } = controller;
  const { pathname } = useLocation();

  useEffect(() => {
    setLayout(dispatch, "dashboard");
  }, [pathname]);

  return (
    <SoftBox
      sx={({ breakpoints, transitions, functions: { pxToRem } }) => ({
        p: 3,
        position: "relative",
        backgroundImage: `url(${backgroundImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        minHeight: "100vh",


        [breakpoints.up("xl")]: {
          marginLeft: miniSidenav ? pxToRem(120) : pxToRem(274),
          transition: transitions.create(["margin-left", "margin-right"], {
            easing: transitions.easing.easeInOut,
            duration: transitions.duration.standard,
          }),
        },
      })}
    >
      {children}
    </SoftBox>
  );
}

// Typechecking props for the DashboardLayout
DashboardLayout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default DashboardLayout;
