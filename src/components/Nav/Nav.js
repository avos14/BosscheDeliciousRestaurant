import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./Nav.css";
import HamburgerIcon from "./images/icon-hamburger.svg";
import HamburgerClose from "./images/icon-close.svg";

function Nav() {
  const [navIsOpen, setNavIsOpen] = useState(false);

  useEffect(() => {
    if (navIsOpen) {
      document.documentElement.style.overflow = "hidden";
    }

    return () => {
      document.documentElement.style.overflowY = "scroll";
    };
  }, [navIsOpen]);

  const handleClick = () => {
    setNavIsOpen(!navIsOpen);
  };

  return (
    <nav className="nav">
      <Link className="logo" to="/">
      Bossche-Delicious Restaurant
      </Link>

      <ul className={`nav-links ${navIsOpen ? "show-nav" : ""}`}>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/products">Produkten</Link>
        </li>
        <li>
          <Link to="/about">Over ons</Link>
        </li>
        <li>
          <Link to="/contact">Neem contact op</Link>
        </li>
      </ul>

      <div onClick={handleClick} className="hamburger">
        {!navIsOpen && <img src={HamburgerIcon} alt="" />}
        {navIsOpen && <img src={HamburgerClose} alt="" />}
      </div>
    </nav>
  );
}

export default Nav;

