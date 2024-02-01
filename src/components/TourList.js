import React, { useState } from "react";
import Tour from "./Tour";

const TourList = ({ tours, onDeleteTour }) => {
  const [showInfo, setShowInfo] = useState({});

  const handleToggleInfo = (id) => {
    setShowInfo((prevShowInfo) => ({
      ...prevShowInfo,
      [id]: !prevShowInfo[id],
    }));
  };

  return (
    <div>
      {tours.map((tour) => (
        <Tour
          key={tour.id}
          tour={tour}
          showInfo={showInfo[tour.id] || false}
          onToggleInfo={() => handleToggleInfo(tour.id)}
          onDeleteTour={() => onDeleteTour(tour.id)}
        />
      ))}
    </div>
  );
};

export default TourList;
