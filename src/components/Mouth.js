import { arc } from "d3-shape";
import React from "react";

const Mouth = () => {
  const mouthArc = arc()
    .innerRadius(140)
    .outerRadius(160)
    .startAngle(Math.PI / 2)
    .endAngle((Math.PI * 3) / 2);
  return (
    <>
      <path d={mouthArc()}></path>
    </>
  );
};

export default Mouth;
