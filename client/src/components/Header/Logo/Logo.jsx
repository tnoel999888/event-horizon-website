import React from "react";
import logo from "../../../assets/logo-white.png";
import "./logo.css";

function Logo() {
  return (
    <div className="logo">
      <a href="/">
        <img className="logo-img" alt="Event Horizon logo" src={logo} />
      </a>
    </div>
  );
}

export default Logo;