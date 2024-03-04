import React from "react";
import "./about.css";
import Image from "../../assets/me.png";
import PdfCv from "../../private_files/CV_Dominik_Such.pdf";

const About = () => {
  return (
    <section className="about container section" id="about">
      <h2 className="section__title">O mnie</h2>
      <div className="about__container grid">
        <img src={Image} alt="" className="about__img" />
        <div className="about__data">
          <div className="about__info">
            <p className="about__description">
              Jestem testerem oprogramowania i początkującym programistą React.
              Od ponad 2 lat pracuję jako tester aplikacji webowych gdzie
              zajmuję się szeroko pojętym testowaniem - automatyzacja, API, oraz
              testy manualne. W swojej pracy wykorzystuję m.in. JS, TS,
              Playwright, Cypress, React. Poszukuję miejsca pracy gdzie będę
              mógł dalej rozwijać się w powyższych technologiach, a także
              poznawać nowe rozwiązania.
            </p>
            <a href={PdfCv} className="btn" download="CV_Dominik_Such.pdf">
              Pobierz CV
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
