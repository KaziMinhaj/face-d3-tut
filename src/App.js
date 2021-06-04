import { range } from "d3";
import Face from "./components/Face";

function App() {
  const width = 160;
  const height = 160;
  const centerX = width / 2;
  const centerY = height / 2;

  const array = range(50);

  return (
    <>
      {array.map(() => (
        <Face
          height={500}
          centerX={centerX}
          centerY={centerY}
          strokeWidth={10}
          eyeOffsetX={30}
          eyeOffsetY={30}
          eyeRadius={5 + Math.random() * 10}
          width={width}
          innerRadius={40 + Math.random() * 10}
          outerRadius={50 + Math.random() * 10}
        ></Face>
      ))}
    </>
  );
}

export default App;
