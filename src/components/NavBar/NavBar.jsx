import React from "react";
import menu from "../../assets/icons/menu.png";
import "./NavBar.scss";
import "../../styles/global.scss";
import { NavLink } from "react-router-dom";
import { useState } from "react";
import close from "../../assets/icons/close.png";
import call from "../../assets/icons/call.png";
import logo from "../../assets/images/logo.jpg";
import { HashLink } from "react-router-hash-link";

const NavBar = () => {
  const [showMenu, setShowMenu] = useState(false);

  const handleShowMenu = () => {
    setShowMenu(!showMenu);
  };

  return (
    <>
      <div className="mobile-nav">
        <img src={logo} alt="logo" className="mobile-nav__logo" />
        <img
          src={menu}
          alt="menu icon"
          className="mobile-nav__menu"
          onClick={handleShowMenu}
        />
      </div>

      <section
        className={
          showMenu ? " mobile-nav__overlay" : "mobile-nav__overlay-hidden"
        }
      >
        <img
          src={close}
          alt="close icon"
          className="mobile-nav__close"
          onClick={handleShowMenu}
        />
        <div className="mobile-nav__list">
          <HashLink
            to="/#home"
            className="mobile-nav__link"
            onClick={handleShowMenu}
          >
            Home
          </HashLink>
          <HashLink
            smooth
            to="/#about"
            className="mobile-nav__link"
            onClick={handleShowMenu}
          >
            About
          </HashLink>
          <HashLink to="/#services" className="mobile-nav__link">
            {" "}
            Services
          </HashLink>
          <HashLink to="/#contact" className="mobile-nav__link">
            {" "}
            Contact
          </HashLink>
        </div>
      </section>

      <div className="desktop-nav">
        <section className="desktop-nav__section-one">
          <img src={logo} alt=" logo" className="desktop-nav__logo" />
          <HashLink to="/#home" className="desktop-nav__link">
            Home
          </HashLink>
          <HashLink to="/#about" className="desktop-nav__link">
            About
          </HashLink>
          <HashLink to="/#services" className="desktop-nav__link">
            Services
          </HashLink>
          <HashLink to="/#contact" className="desktop-nav__link">
            Contact
          </HashLink>
        </section>
        <section className="desktop-nav__section-two">
          <img src={call} alt="call icon" className="desktop-nav__call" />
          <p className="desktop-nav__phone">+1-204-295-2954</p>
        </section>
      </div>
    </>
  );
};

export default NavBar;
