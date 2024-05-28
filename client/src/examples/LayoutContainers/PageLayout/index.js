import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import PropTypes from "prop-types";
import SoftBox from "../../../components/SoftBox";
import { useSoftUIController, setLayout } from "../../../context";

function PageLayout({ background, children }) {
  const [, dispatch] = useSoftUIController();
  const { pathname } = useLocation();

  useEffect(() => {
    setLayout(dispatch, "page");
  }, [pathname]);

  return (
    <SoftBox
      width="100vw"
      height="100%"
      minHeight="100vh"
      bgColor={background}
      sx={{ overflowX: "hidden" }}
    >
      {children}
    </SoftBox>
  );
}
PageLayout.defaultProps = {
  background: "default",
};
PageLayout.propTypes = {
  background: PropTypes.oneOf(["white", "light", "default"]),
  children: PropTypes.node.isRequired,
};

export default PageLayout;
