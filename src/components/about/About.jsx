import React from "react";
import "./about.css";
import Image from "../../assets/man.png";
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
              Nazywam się Dominik Such i moim hobby jest testowanie, oraz nauka
              programowania. Od około roku pracuję jako główny tester aplikacji
              mobilnych, oraz webowych gdzie zajmuję się testowaniem manualnym.
              W wolnym czasie uczę się programowania testów automatycznych,
              które zacząłem wykorzystywać w swojej pracy, głównie przy użyciu
              narzędzia Cypress, a także programowania w języku JavaScript
              wykorzystując bibliotekę React. Poszukuję miejsca pracy, które
              zapewni mi możliwość dalszego rozwoju.
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
