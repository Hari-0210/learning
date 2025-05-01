import React, { useState } from "react";

function StarRating() {
  const [rating, setRating] = useState(0);
  const [hover, setHover] = useState(0);

  const handleClick = (ratingValue) => {
    setRating(ratingValue);
  };

  const handleMouseEnter = (ratingValue) => {
    setHover(ratingValue);
  };

  const handleMouseLeave = () => {
    setHover(rating);
  };

  const renderStars = () => {
    const stars = [];
    for (let i = 1; i <= 5; i++) {
      stars.push(
        <Star
          key={i}
          filled={i <= (hover || rating)}
          onClick={() => handleClick(i)}
          onMouseEnter={() => handleMouseEnter(i)}
          onMouseLeave={handleMouseLeave}
        />
      );
    }
    return stars;
  };

  return <div>{renderStars()}</div>;
}

const Star = ({ filled, onClick, onMouseEnter, onMouseLeave }) => {
  return (
    <span
      style={{
        cursor: "pointer",
        color: filled ? "gold" : "grey",
        fontSize: "24px",
      }}
      onClick={onClick}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
    >
      ★
    </span>
  );
};

export default StarRating;
