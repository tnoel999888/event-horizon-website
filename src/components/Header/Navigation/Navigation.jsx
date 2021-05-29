import './navigation.css';
import { Link, useLocation } from "react-router-dom";

function Navigation() {
  const location = useLocation();
  const path = location.pathname;

  const navigationItems = [
    {
      label: 'HOME',
      url: '/'
    },
    {
      label: 'NEWS',
      url: '/news/'
    },
    {
      label: 'EVENTS',
      url: '/events/'
    },
    {
      label: 'MUSIC',
      url: '/music/'
    },
    {
      label: 'CONTACT',
      url: '/contact/'
    },
  ];
  
  return (
    <div>
      {navigationItems.map((navItem, i) => (
        <Link to={navItem.url} className={`nav-item ${path === navItem.url ? "active" : ""}`}>{navItem.label}</Link>
      ))}
    </div>
  );
}

export default Navigation;
