import React from "react";
import { block } from "bem-cn";
import Navigation from "./Navigation";
import Logo from "./Logo";
import "./header.scss";

const classname = block("header");

function Header() {
  return (
    <div className={classname()}>
      <Logo />
      <Navigation />
    </div>
  );
}

export default Header;
