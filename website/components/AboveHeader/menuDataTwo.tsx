import { Menu } from "@/types/menu";

const menuDataTwo: Menu[] = [
  {
    id: 1,
    title: "Home",
    path: "/",
    newTab: false,
  },
  {
    id: 2,
    title: "About Bugema",
    path: "/whybugema",
    newTab: false,
  },
  {
    id: 3,
    title: "News And Events",
    newTab: false,
    submenu: [
      {
        id: 31,
        title: "News Updates",
        path: "/news",
        newTab: false,
      },
      {
        id: 31,
        title: "Upcoming events",
        path: "/events",
        newTab: false,
      },
    ],
  },
  {
    id: 4,
    title: "Schools",
    newTab: false,
    submenu: [
      {
        id: 41,
        title: "Graduate Studies",
        path: "/schools/school-of-graduate",
        newTab: false,
      },
      {
        id: 42,
        title: "Business",
        path: "/schools/school-of-business",
        newTab: false,
      },
      {
        id: 43,
        title: "Agriculture and Applied Sciences", 
        path: "/schools/school-of-agric",
        newTab: false,
      },
      {
        id: 44,
        title: "Education",
        path: "/schools/school-of-education",
        newTab: false,
      },
      {
        id: 45,
        title: "Social Sciences",
        path: "/schools/school-of-social",
        newTab: false,
      },
      {
        id: 46,
        title: "Theology and Religious Studies",
        path: "/schools/school-of-theology",
        newTab: false,
      },
      {
        id: 47,
        title: "Health and Allied Sciences",
        path: "/schools/school-of-health",
        newTab: false,
      },
      {
        id: 48,
        title: "Science and Technology",
        path: "/schools/school-of-science",
        newTab: false,
      },
    ],
  },
  {
    id: 5,
    title: "Student Life",
    path: "/studentlife",
    newTab: false,
  },
  {
    id: 6,
    title: "Contact Us",
    path: "/contact",
    newTab: false,
  },
];
export default menuDataTwo;
