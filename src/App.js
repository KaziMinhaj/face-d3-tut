import BackgroundCircle from "./components/BackgroundCircle";
import Eyes from "./components/Eyes";
import Mouth from "./components/Mouth";

function App() {
  const width = 960;
  const height = 500;
  const centerX = width / 2;
  const centerY = height / 2;
  const strokeWidth = 10;
  const eyeOffsetX = 90;
  const eyeOffsetY = 100;
  const eyeRadius = 50;

  return (
    <div>
      <svg width={width} height={height}>
        <g transform={`translate(${centerX},${centerY})`}>
          <BackgroundCircle
            centerY={centerY}
            strokeWidth={strokeWidth}
          ></BackgroundCircle>
          <Eyes
            eyeOffsetX={eyeOffsetX}
            eyeOffsetY={eyeOffsetY}
            eyeRadius={eyeRadius}
          ></Eyes>
          <Mouth></Mouth>
        </g>
      </svg>
    </div>
  );
}

export default App;
