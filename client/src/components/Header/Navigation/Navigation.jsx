import React from "react";
import { block } from "bem-cn";
import { Link, useLocation } from "react-router-dom";
import { navigationItems } from "./consts";
import "./navigation.scss";

const classname = block("navigation");

function Navigation() {
  const location = useLocation();
  const path = location.pathname;

  return (
    <div className={classname()}>
      {navigationItems.map((navItem) => (
        <Link
          to={navItem.url}
          className={classname(`item${path === navItem.url ? " active" : ""}`)}
          key={navItem.label}
        >
          {navItem.label}
        </Link>
      ))}
    </div>
  );
}

export default Navigation;
