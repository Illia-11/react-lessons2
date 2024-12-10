import React, { useState, useEffect } from "react";

// ERROR
// useState();

// function sum() {
//   // ERROR
//   useState();
// }

function FormMouseTracker() {
  const [inputText, setInputText] = useState("dont kill me");

  // if (true) {
  //   // ERROR
  //   useEffect(() => {
  //     console.log("не найвищий рівень");
  //   });
  // }

  useEffect(() => {
    if (true) {
      console.log("не найвищий рівень");
    }
  });

  const [{ x, y }, setMouseCoordinates] = useState({
    x: 0,
    y: 0,
  });

  useEffect(function effect() {
    console.log("effect callback");
    document.addEventListener("mousemove", handleChangeCoords);

    return function effectCleanup() {
      console.log("effectCleanup callback");
      document.removeEventListener("mousemove", handleChangeCoords);
    };
  }, []);

  useEffect(() => {
    document.title = `Input value ${inputText}`;
    console.log("Input title change");
  }, [inputText]);

  useEffect(() => {
    console.log(`{X is: ${x}}`);
    console.log(`{Y is: ${y}}`);
  }, [x, y]);

  const handleInputChange = ({ target: { value } }) => {
    setInputText(value);

    // setInputText((inputTextValue) => {
    //   console.log(inputTextValue)

    //   return value;
    // });
  };

  function handleChangeCoords({ clientX, clientY }) {
    setMouseCoordinates({
      x: clientX,
      y: clientY,
    });
  }

  return (
    <div
      style={{
        minHeight: "500px",
        maxWidth: "500px",
        border: "1px solid black",
      }}
      onMouseMove={handleChangeCoords}
    >
      <p>Input value is: {inputText}</p>
      <p>X coord value is: {x}</p>
      <p>Y coord is: {y}</p>
      <input type="text" value={inputText} onChange={handleInputChange} />
    </div>
  );
}
export default FormMouseTracker;
