import React, { useState } from "react";
import "./navbar.css";

const Navbar = () => {
  const [isHamburgerOpen, setIsHamburgerOpen] = useState(false);

  const hamburgerMenuHandler = () => {
    setIsHamburgerOpen(!isHamburgerOpen);
  };

  const closeHamburgerClickHandler = () => {
    setIsHamburgerOpen(false);
  };

  return (
    <nav className="nav">
      <a href="#home" className="nav__logo">
        <i
          className="fa-solid fa-house nav__home-icon"
          onClick={closeHamburgerClickHandler}
        ></i>
      </a>

      <div className="nav__menu">
        <ul className={`nav__list ${isHamburgerOpen && "open"}`}>
          <li className="nav__item">
            <a
              href="#about"
              className="nav__link"
              onClick={closeHamburgerClickHandler}
            >
              O mnie
            </a>
          </li>
          <li className="nav__item">
            <a
              href="#resume"
              className="nav__link"
              onClick={closeHamburgerClickHandler}
            >
              Kwalifikacje
            </a>
          </li>
          <li className="nav__item">
            <a
              href="#portfolio"
              className="nav__link"
              onClick={closeHamburgerClickHandler}
            >
              Portfolio
            </a>
          </li>
          <li className="nav__item">
            <a
              href="#contact"
              className="nav__link"
              onClick={closeHamburgerClickHandler}
            >
              Kontakt
            </a>
          </li>
        </ul>
      </div>

      <div className="nav__buttons">
        <i className="fa-solid fa-moon"></i>
        <i className="fa-solid fa-bars" onClick={hamburgerMenuHandler}></i>
      </div>
    </nav>
  );
};

export default Navbar;
