
import Dashboard from "./layouts/dashboard";
import Tables from "./layouts/tables";
import Profile from "./layouts/profile";
import SignIn from "./layouts/authentication/sign-in";
import SignUp from "./layouts/authentication/sign-up";
import Events from "./layouts/events";
import News from "./layouts/news";
import Publication from "./layouts/publication";
import Department from "./layouts/department";
import Jobs from "./layouts/Jobs";

// Soft UI Dashboard React icons
import Shop from "./examples/Icons/Shop";
import Office from "./examples/Icons/Office";
import Settings from "./examples/Icons/Settings";
import Document from "./examples/Icons/Document";
import SpaceShip from "./examples/Icons/SpaceShip";
import CustomerSupport from "./examples/Icons/CustomerSupport";
import Cube from "./examples/Icons/Cube";

const routes = [
  {
    type: "collapse",
    name: "Dashboard",
    key: "dashboard",
    route: "/dashboard",
    icon: <Shop size="12px" />,
    component: <Dashboard />,
    noCollapse: true,
  },
  {
    type: "collapse",
    name: "Slides",
    key: "tables",
    route: "/tables",
    icon: <Office size="12px" />,
    component: <Tables />,
    noCollapse: true,
  },
  {
    type: "collapse",
    name: "Dapartment",
    key: "department",
    route: "/department",
    icon: <Cube size="12px" />,
    component: <Department />,
    noCollapse: true,
  },
  {
    type: "collapse",
    name: "News",
    key: "news",
    route: "/news",
    icon: <Cube size="12px" />,
    component: <News/>,
    noCollapse: true,
  },
  {
    type: "collapse",
    name: "Events",
    key: "events",
    route: "/events",
    icon: <Settings size="12px" />,
    component: <Events />,
    noCollapse: true,
  },
  {
    type: "collapse",
    name: "Publication",
    key: "publication",
    route: "/publication",
    icon: <Settings size="12px" />,
    component: <Publication />,
    noCollapse: true,
  },
  {
    type: "collapse",
    name: "Jobs",
    key: "jobs",
    route: "/jobs",
    icon: <Settings size="12px" />,
    component: <Jobs />,
    noCollapse: true,
  },
  { type: "title", title: "Account Pages", key: "account-pages" },
  {
    type: "collapse",
    name: "Team",
    key: "profile",
    route: "/profile",
    icon: <CustomerSupport size="12px" />,
    component: <Profile />,
    noCollapse: true,
  },
  {
    type: "collapse",
    name: "Sign In",
    key: "signin",
    route: "/sign",
    icon: <Document size="12px" />,
    component: <SignIn />,
    noCollapse: true,
  },
  {
    type: "collapse",
    name: "Sign Up",
    key: "sign-up",
    route: "/authentication/sign-up",
    icon: <SpaceShip size="12px" />,
    component: <SignUp />,
    noCollapse: true,
  },
];

export default routes;
