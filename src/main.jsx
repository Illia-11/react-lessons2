import React, { StrictMode, Component } from "react";
import { createRoot } from "react-dom/client";
// import MyClassComponent from './components/MyClassComponent';
// import MyFunctionalComponent from './components/MyFunctionalComponent';
import App from "./App";

/*
  Компоненти бувають двох видів:
    - класові
    - функціональні
*/

// Щоб намалювати компонент його закидуємо у createElement першим параметром
// const funcElem1 = React.createElement(MyFunctionalComponent);
// const funcElem2 = React.createElement(MyFunctionalComponent);

// const classElem1 = React.createElement(MyClassComponent);
// const classElem2 = React.createElement(MyClassComponent);

// const app = React.createElement('div', null, classElem1, classElem2, funcElem1, funcElem2);

// Фрагмент - спеціальний компонент, який дозволяє створювати обгортку для елементів, яку реакт потім не буде малювати у верстці. Пропси (2 аргумент) завжди мають бути null
// const frag = React.createElement(React.Fragment, null, classElem1, classElem2, funcElem1, funcElem2);

const app = React.createElement(App);

createRoot(document.getElementById("root")).render(app);
