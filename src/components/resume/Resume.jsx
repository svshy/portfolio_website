import React, { useState, useEffect } from "react";
import "./resume.css";
import Card from "./Card";

const qualificationsArray = [
  {
    id: 1,
    category: "education",
    year: "10.2020 - 06.2021",
    title: "Tester Oprogramowania",
    desc: "Studia Podyplomowe, Wyższa Szkoła Informatyki I Zarządzania w Rzeszowie",
  },
  {
    id: 2,
    category: "education",
    year: "02.2020 - 02.2021",
    title: "Marketing Internetowy",
    desc: "Studia Podyplomowe, Akademia Górniczo-Hutnicza w Krakowie",
  },
  {
    id: 3,
    category: "education",
    year: "10.2015 - 06.2018",
    title: "Ekonomia",
    desc: "Studia licencjackie, Uniwerystet Rzeszowski",
  },
  {
    id: 4,
    category: "experience",
    year: "02.2023 - obecnie",
    title: "Tester Oprogramowania",
    desc: "EMPIK S.A.",
  },
  {
    id: 5,
    category: "experience",
    year: "02.2022 - 01.2023",
    title: "Tester Oprogramowania",
    desc: "Unity-t Group Sp. z o.o. Sp. k.",
  },
  {
    id: 6,
    category: "experience",
    year: "03.2020 - 10.2020",
    title: "Specjalista ds. sprzedaży internetowej / księgowy",
    desc: "ALDOMI Alicja Zimny",
  },
  {
    id: 7,
    category: "experience",
    year: "08.2018 - 12.2021",
    title: "Specjalista ds. sprzedaży internetowej",
    desc: "SHOKO SP. Z O.O. - Cocolita.pl",
  },
];

const Resume = () => {
  const [qualifications, setQualifications] = useState([]);
  const [isExperience, setIsExperience] = useState(true);

  useEffect(() => {
    const educationArray = qualificationsArray.filter(
      (qualification) => qualification.category === "experience"
    );

    setQualifications(educationArray);
  }, []);

  const filterQualificationsHandler = (category) => {
    const updatedQualifications = qualificationsArray.filter(
      (qualification) => qualification.category === category
    );

    if (category === "education") {
      setIsExperience(false);
    } else {
      setIsExperience(true);
    }

    setQualifications(updatedQualifications);
  };
  return (
    <section className="resume container section" id="resume">
      <h2 className="section__title">Kwalifikacje</h2>
      <div className="resume__tabs">
        <span
          className={`resume__item ${isExperience && "active"}`}
          onClick={() => filterQualificationsHandler("experience")}
        >
          Doświadczenie
        </span>
        <span
          className={`resume__item ${!isExperience && "active"}`}
          onClick={() => filterQualificationsHandler("education")}
        >
          Wykształcenie
        </span>
      </div>
      <div className="resume__container">
        <div className="resume__timeline">
          <div className="resume__qualification">
            <i
              className={`qualification-icon ${
                isExperience
                  ? "fa-solid fa-graduation-cap"
                  : "fa-solid fa-briefcase"
              }`}
            ></i>
          </div>
          {qualifications.map((qualification) => {
            return (
              <Card
                key={qualification.id}
                title={qualification.title}
                year={qualification.year}
                desc={qualification.desc}
              />
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Resume;
