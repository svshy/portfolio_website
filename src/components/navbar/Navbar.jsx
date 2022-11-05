import React, { useState, useContext } from "react";
import "./navbar.css";
import { ThemeContext } from "../../App";

const Navbar = () => {
  const [isHamburgerOpen, setIsHamburgerOpen] = useState(false);

  const themeCtx = useContext(ThemeContext);

  const hamburgerMenuHandler = () => {
    setIsHamburgerOpen(!isHamburgerOpen);
  };

  const closeHamburgerClickHandler = () => {
    setIsHamburgerOpen(false);
  };

  return (
    <nav className="nav container">
      <div className="nav__container">
        <i
          className={`fa-solid nav__container-close-icon ${
            isHamburgerOpen ? "fa-xmark" : "fa-bars"
          }`}
          onClick={hamburgerMenuHandler}
        ></i>

        <div className="nav__menu">
          <ul className={`nav__list ${isHamburgerOpen ? "open" : "close"}`}>
            <li className="nav__item">
              <a
                href="#home"
                className="nav__link"
                onClick={closeHamburgerClickHandler}
              >
                Strona główna
              </a>
            </li>
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
          <i
            className={`fa-solid ${
              themeCtx.theme === "light" ? "fa-moon" : "fa-sun"
            }`}
            onClick={themeCtx.toggleTheme}
          ></i>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
