import React from "react";

const BackgroundCircle = ({ centerY, strokeWidth }) => {
  return (
    <circle
      r={centerY - strokeWidth / 2}
      fill="yellow"
      stroke="black"
      stroke-width={strokeWidth}
    ></circle>
  );
};

export default BackgroundCircle;
