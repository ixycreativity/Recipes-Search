import React, { useState } from "react";
import "./FlippableCard.css";
import Card from "../card/Card";
import { CSSTransition } from "react-transition-group";

const FlippableCard = ({ title, calories, image, ingredients }) => {
  const [showFront, setShowFront] = useState(true);
  return (
    <div className="flippable-card-container">
      <CSSTransition in={showFront} timeout={300} classNames="flip">
        <Card
          onClick={() => {
            setShowFront((V) => !V);
          }}
          title={title}
          calories={calories}
          image={image}
          ingredients={ingredients}
        />
      </CSSTransition>
    </div>
  );
};

export default FlippableCard;
