import React from "react";
import MyClassComponent from "./components/MyClassComponent";
import MyFunctionalComponent from "./components/MyFunctionalComponent";
import Greeting from "./components/Greeting";

function App() {
  const shouldClassComponentsRender = Math.random() > 0.5;

  const funcElem1 = React.createElement(MyFunctionalComponent);
  const funcElem2 = React.createElement(MyFunctionalComponent);

  const classElem1 = React.createElement(MyClassComponent);
  const classElem2 = React.createElement(MyClassComponent);

  // return React.createElement('div', null, classElem1, classElem2, funcElem1, funcElem2);

  if(shouldClassComponentsRender) {
    return React.createElement(
      React.Fragment,
      null,
      React.createElement(Greeting, { userFirstName: "John", userLastName: "Doe" }),
      React.createElement(Greeting, { userFirstName: "Andrew" }),
      React.createElement(Greeting, ),
      funcElem1,
      funcElem2
    );
  } else {
    return React.createElement(
      React.Fragment,
      null,
      React.createElement(Greeting, { userFirstName: "John", userLastName: "Doe" }),
      React.createElement(Greeting, { userFirstName: "Andrew" }),
      React.createElement(Greeting, ),
      classElem1,
      classElem2
    );
  }
}

export default App;
