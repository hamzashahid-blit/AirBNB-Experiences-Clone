import React from "react";
import Logo from "../assets/airbnb-logo.png";

function NavBar() {
  return (
    <nav className="navbar">
      <img src={Logo} className="nav--logo" />
    </nav>
  );
}

export default NavBar;
