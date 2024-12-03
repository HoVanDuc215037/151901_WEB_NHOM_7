import React from "react";
import "./CategoryCard.css"; 

const CategoryCard = ({ title, icon }) => {
  return (
    <div className="category-card">
      <img src={icon} alt={title} className="category-icon" />
      <p className="category-title">{title}</p>
    </div>
  );
};

export default CategoryCard;
