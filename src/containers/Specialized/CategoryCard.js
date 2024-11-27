// components/CategoryCard.js
import React from "react";
import "./CategoryCard.scss";

const CategoryCard = ({ title, icon }) => {
  return (
    <div className="card">
      <img src={icon} alt={title} className="icon" />
      <h3 className="title">{title}</h3>
    </div>
  );
};

export default CategoryCard;
