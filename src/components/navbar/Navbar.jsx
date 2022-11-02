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
    <nav className="nav container">
      <div className="nav__container">
        <i className="fa-solid fa-bars" onClick={hamburgerMenuHandler}></i>

        <div className="nav__menu">
          <ul className={`nav__list ${isHamburgerOpen && "open"}`}>
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
          <i className="fa-solid fa-moon"></i>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
