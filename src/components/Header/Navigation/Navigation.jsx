import "./navigation.css";
import React from "react";
import { Link, useLocation } from "react-router-dom";

function Navigation() {
  const location = useLocation();
  const path = location.pathname;

  const navigationItems = [
    {
      label: "HOME",
      url: "/",
    },
    {
      label: "NEWS",
      url: "/news/",
    },
    {
      label: "MUSIC",
      url: "/music/",
    },
    {
      label: "CONTACT",
      url: "/contact/",
    },
  ];

  return (
    <div className="navigation">
      {navigationItems.map((navItem) => (
        <Link to={navItem.url} className={`nav-item ${path === navItem.url ? "active" : ""}`} key={navItem.label}>{navItem.label}</Link>
      ))}
    </div>
  );
}

export default Navigation;
