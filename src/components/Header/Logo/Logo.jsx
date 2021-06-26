import "./logo.css";
import React from "react";
import logo from "../../../assets/logo-white.png";

function Logo() {
  return (
    <div className="logo">
      <a href="/"><img width="300px" alt="Event Horizon logo" src={logo} /></a>
    </div>
  );
}

export default Logo;
