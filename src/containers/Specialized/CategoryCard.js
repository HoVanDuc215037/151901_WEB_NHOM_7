  import React from "react";
  import "../Specialized/CategoryCard.scss"; 
  import { useHistory  } from "react-router-dom";

  const CategoryCard = ({ title, icon, link}) => {
    const history = useHistory();;

    const handleClick = () => {
      history.push(link); 
    };
    return (
      <div className="category-card" onClick={handleClick}>
        <img src={icon} alt={title} className="category-icon" />
        <p className="category-title">{title}</p>
      </div>
    );
  };

  export default CategoryCard;
