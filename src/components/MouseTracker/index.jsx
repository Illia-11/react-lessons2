import React, { useState, useEffect } from "react";

const MouseTracker = (props) => {
  const [{ x, y }, setMouseCoordinates] = useState({
    x: 0,
    y: 0,
  });

  const handleChangeCoords = ({ clientX, clientY }) => {
    setMouseCoordinates({
      x: clientX,
      y: clientY,
    });
  };

  /*
    Хук для роботи з побічними елементами
    Приймає функцію і повертає undefined
  */
  useEffect(function effect() {
    /*
      Коллбек effect за замовчанням запускається після кожного рендеру
      Тобто є комбінацією componentDidMount + componentDidUpdate
    */
    console.log("effect callback");
    document.addEventListener("mousemove", handleChangeCoords);

    return function effectCleanup() {
      /*
        Коллбек effectCleanup є аналогом componentWillUnmount, АЛЕ
        він також запускається перед кожним рендером після першого
      */
      console.log("effectCleanup callback");
      document.removeEventListener("mousemove", handleChangeCoords);
    };
  });

  return (
    <div>
      <p>X coord value is: {x}</p>
      <p>Y coord is: {y}</p>
    </div>
  );
};

export default MouseTracker;
