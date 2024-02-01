import React from "react";

const Tour = ({ tour, showInfo, onToggleInfo, onDeleteTour }) => {
  const { id, name, info, image, price } = tour;
  const shortInfo = info.substring(0, 200);

  return (
    <article className="single-tour">
      <img src={image} alt={name} />
      <h2>{name}</h2>
      <p className="tour-info">{showInfo ? info : shortInfo}</p>
      <p className="tour-price">{`Price: $${price}`}</p>
      <button className="delete-btn" onClick={onDeleteTour}>
        Delete Tour
      </button>
      <button onClick={onToggleInfo}>
        {showInfo ? "Show Less" : "Show More"}
      </button>
    </article>
  );
};

export default Tour;
