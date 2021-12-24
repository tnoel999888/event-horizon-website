import React from "react";
import { block } from "bem-cn";
import logo from "../../../assets/logo-white.png";
import "./logo.scss";

const classname = block("logo");

function Logo() {
  return (
    <div className={classname()}>
      <a href="/">
        <img className={classname("img")} alt="Event Horizon logo" src={logo} />
      </a>
    </div>
  );
}

export default Logo;
