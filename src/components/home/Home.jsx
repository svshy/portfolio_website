import React from "react";
import "./home.css";
import Image from "../../assets/work-man.svg";
import HeaderSocials from "./HeaderSocials";

const Home = () => {
  return (
    <section className="home container" id="home">
      <div className="home__container grid">
        <div className="home__data">
          <div className="home__info">
            <h3 className="home__info-hello">Cześć, nazywam się</h3>
            <h1 className="home__info-intro">Dominik</h1>
            <h3 className="home__info-desc">
              Jestem testerem oprogramowania i początkującym programistą React.
            </h3>
            <HeaderSocials />
            <div className="button_container">
              <a href="#about" className="btn">
                O mnie
              </a>
            </div>
          </div>
        </div>
        <div className="home__img">
          <img src={Image} alt="" />
        </div>
      </div>
    </section>
  );
};

export default Home;
