import React from "react";
import BackgroundCircle from "./BackgroundCircle";
import Eyes from "./Eyes";
import FaceContainer from "./FaceContainer";
import Mouth from "./Mouth";

const Face = ({
  width,
  height,
  centerX,
  centerY,
  strokeWidth,
  eyeOffsetX,
  eyeOffsetY,
  eyeRadius,
  innerRadius,
  outerRadius,
}) => {
  return (
    <FaceContainer
      width={width}
      height={height}
      centerX={centerX}
      centerY={centerY}
    >
      <BackgroundCircle
        centerY={centerY}
        strokeWidth={strokeWidth}
      ></BackgroundCircle>
      <Eyes
        eyeOffsetX={eyeOffsetX}
        eyeOffsetY={eyeOffsetY}
        eyeRadius={eyeRadius}
      ></Eyes>
      <Mouth outerRadius={outerRadius} innerRadius={innerRadius}></Mouth>
    </FaceContainer>
  );
};

export default Face;
