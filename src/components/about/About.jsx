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
              Nazywam się Dominik Such. Moim hobby jest testowanie oraz nauka
              programowania. Od półtora roku pracuję jako tester
              manualny/automatyczny (Cypress, Playwright) aplikacji webowych. W
              wolnym czasie uczę się również programowania w języku JavaScript
              wykorzystując bibliotekę React.
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
