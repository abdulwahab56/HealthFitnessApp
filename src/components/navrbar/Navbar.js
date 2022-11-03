import React, { useState } from "react";
import Logo from "../assets/logo.png";
import Bars from "../assets/bars.png";

import "../navrbar/Navbar.css";

const Navbar = () => {
  const mobile = window.innerWidth <= 768 ? true : false;
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <div>
      <div className="navbar_logo">
        <img src={Logo} alt="logo image" className="logo_img" />
        {menuOpen === false && mobile === true ? (
          <div onClick={() => setMenuOpen(true)}>
            <img
              src={Bars}
              alt=""
              style={{ width: "5.5rem", heigth: "5.5rem" }}
            />
          </div>
        ) : (
          <ul className="navbar_list">
            <li onClick={() => setMenuOpen(false)}>
              <a href="#">Home</a>
            </li>
            <li onClick={() => setMenuOpen(false)}>
              <a href="#program">Program</a>
            </li>
            <li onClick={() => setMenuOpen(false)}>
              <a href="#whyus">Why us</a>
            </li>
            <li onClick={() => setMenuOpen(false)}>
              <a href="#Plans">Plans</a>
            </li>
            <li onClick={() => setMenuOpen(false)}>
              <a href="#testimonial">Testimonial</a>
            </li>
          </ul>
        )}
      </div>
    </div>
  );
};

export default Navbar;
