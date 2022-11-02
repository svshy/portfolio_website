import React from "react";
import "./card.css";

const Card = (props) => {
  return (
    <div className="timeline__item">
      <span className="timeline__date">{props.year}</span>
      <h3 className="timeline__title">{props.title}</h3>
      <p className="timeline__text">{props.desc}</p>
    </div>
  );
};

export default Card;
