import React from "react";
import { OurContext } from "../../../context";
// import { OurContext } from "../A";

const ComponentD = (props) => {
  const { name } = props;
  // return (
  //   <article
  //     style={{
  //       border: "2px dotted blue",
  //       padding: "20px",
  //       background: "lightgray",
  //     }}
  //   >
  //     <h2>ComponentD</h2>
  //     <p>Name is: {name}</p>
  //     <p>otherName is </p>
  //   </article>
  // );

  // 3. Отримати дані там де вони потрібні
  const func = (dataFromContext) => {
    return (
      <article
        style={{
          border: "2px dotted blue",
          padding: "20px",
          background: "lightgray",
        }}
      >
        <h2>ComponentD</h2>
        <p>Name is: {name}</p>
        <p>otherName is: {dataFromContext}</p>
      </article>
    );
  };

  return <OurContext.Consumer>{func}</OurContext.Consumer>;
};

export default ComponentD;
