import React, { useEffect, useState } from "react";

function ProgressBar() {
  return (
    <div style={{ padding: "10px" }}>
      <Progress progress={10} />
      <br />
      <Progress progress={20} />
      <br />
      <Progress progress={30} />
      <br />
      <Progress progress={40} />
      <br />
      <Progress progress={80} />
    </div>
  );
}

const Progress = ({ progress }) => {
  const [width, setWidth] = useState(0);

  useEffect(() => {
    setWidth(progress);
  }, [progress]);

  const getDynamicColor = (progress) => {
    const startColor = { r: 255, g: 0, b: 0 }; // Red
    const middleColor = { r: 255, g: 255, b: 0 }; // Yellow
    const endColor = { r: 0, g: 128, b: 0 }; // Green

    if (progress < 50) {
      // Interpolate between startColor and middleColor
      const ratio = progress / 50;
      const r = Math.round(
        startColor.r + ratio * (middleColor.r - startColor.r)
      );
      const g = Math.round(
        startColor.g + ratio * (middleColor.g - startColor.g)
      );
      const b = Math.round(
        startColor.b + ratio * (middleColor.b - startColor.b)
      );
      return `rgb(${r}, ${g}, ${b})`;
    } else {
      // Interpolate between middleColor and endColor
      const ratio = (progress - 50) / 50;
      const r = Math.round(
        middleColor.r + ratio * (endColor.r - middleColor.r)
      );
      const g = Math.round(
        middleColor.g + ratio * (endColor.g - middleColor.g)
      );
      const b = Math.round(
        middleColor.b + ratio * (endColor.b - middleColor.b)
      );
      return `rgb(${r}, ${g}, ${b})`;
    }
  };
  return (
    <div
      style={{
        height: 10,
        border: "1px solid black",
        width: "100%",
      }}
    >
      <div
        style={{
          width: `${width}%`,
          background: getDynamicColor(width),
          height: "inherit",
          transition: "width 2s",
        }}
      ></div>
    </div>
  );
};

export default ProgressBar;
