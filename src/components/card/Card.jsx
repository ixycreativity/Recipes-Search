import React from "react";
import "./Card.css";
import "./FlipTransition.css";

const Card = ({ onClick, title, calories, image, ingredients }) => {
  return (
    <div className="card" onClick={onClick}>
      <div className="card-front">
        <h2>{title}</h2>
        <img src={image} alt="" className="recipe-img" />
        <p>{Math.round(calories)} kCals</p>
      </div>
      <div className="card-back">
        <ol>
          {ingredients.map((ingredient) => (
            <li>{ingredient.text}</li>
          ))}
        </ol>
      </div>
    </div>
  );
};

export default Card;
