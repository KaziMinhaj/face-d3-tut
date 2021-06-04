import Face from "./components/Face";

function App() {
  const width = 960;
  const height = 500;
  const centerX = width / 2;
  const centerY = height / 2;

  return (
    <>
      <Face
        height={500}
        centerX={centerX}
        centerY={centerY}
        strokeWidth={10}
        eyeOffsetX={90}
        eyeOffsetY={100}
        eyeRadius={50}
        width={width}
      ></Face>
    </>
  );
}

export default App;
