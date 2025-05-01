import React, { useState, useEffect } from "react";
import "./styles.css";

function TrafficLight() {
  const lights = ["red", "yellow", "green"];
  const lightIntervals = { red: 4000, yellow: 500, green: 3000 };

  const [currentLightIndex, setCurrentLightIndex] = useState(2);

  useEffect(() => {
    const changeLight = () => {
      setCurrentLightIndex((prevIndex) => (prevIndex + 1) % lights.length);
    };

    const currentLight = lights[currentLightIndex];
    const interval = lightIntervals[currentLight];

    const intervalId = setInterval(changeLight, interval);

    return () => clearInterval(intervalId);
  }, [currentLightIndex]);

  return (
    <div className="container">
      <div className="outer">
        {lights.map((color, index) => (
          <div
            key={index}
            className={`round ${currentLightIndex === index ? color : ""}`}
          ></div>
        ))}
      </div>
    </div>
  );
}

export default TrafficLight;
