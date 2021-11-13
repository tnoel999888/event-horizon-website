import {
  Home, Music, Contact, News,
} from "./components";

const navigation = [
  {
    path: "/",
    component: Home,
  },
  {
    path: "/news/",
    component: News,
  },
  {
    path: "/music/",
    component: Music,
  },
  {
    path: "/contact/",
    component: Contact,
  },
];

export default navigation;
