import { useMouseTracker } from "../../hooks";
const MouseTracker = () => {
  const { x, y } = useMouseTracker();

  return (
    <div>
      <p>X coord value is: {x}</p>
      <p>Y coord is: {y}</p>
    </div>
  );
};

export default MouseTracker;
