import React from "react";
import { Link, useLocation } from "react-router-dom";
import navigationItems from "./consts";
import "./navigation.css";

function Navigation() {
  const location = useLocation();
  const path = location.pathname;

  return (
    <div className="navigation">
      {navigationItems.map((navItem) => (
        <Link to={navItem.url} className={`nav-item ${path === navItem.url ? "active" : ""}`} key={navItem.label}>{navItem.label}</Link>
      ))}
    </div>
  );
}

export default Navigation;
