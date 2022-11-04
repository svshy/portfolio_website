import React from "react";
import "./portfolioItem.css";

const PortfolioItem = ({ id, image, title, description, link }) => {
  return (
    <div className="work__card" key={id}>
      <div className="work__thumbnail">
        <img src={image} alt="" className="work__img" />
      </div>
      <h3 className="work__title">{title}</h3>
      <p className="work__description">{description}</p>
      <div className="work__button">
        <a
          href={link}
          className="work__button-link"
          target="_blank"
          rel="noreferrer"
        >
          <i className="fa-solid fa-arrow-up-right-from-square"></i>
        </a>
      </div>
    </div>
  );
};

export default PortfolioItem;
