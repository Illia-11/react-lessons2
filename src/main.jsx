import React, { StrictMode, Component } from 'react';
import { createRoot } from 'react-dom/client';

/*
  Компоненти бувають двох видів:
    - класові
    - функціональні

  
*/

// Класовий компонент
class MyClassComponent extends React.Component {
  render() {
    // має повертати якусь річ, які реакт буде відмальовувати на його місці
    /*
      Реакт малює:
        цифри
        непусті рядки
        реакт-елементи
        інші реакт компоненти
        в залежності від вмісту - масиви

      Реакт НЕ відображає:
        булові значення
        null
        undefined
        Symbol
      
      Реакт буде кидати помилку, якщо змусити його відмалювати звичайний обʼєкт
    */
    const heading = React.createElement('h2', {className: 'articleHeading'}, 'Class Component heading');

    const textPar = React.createElement('p', null, 'Lorem Ipsum');

    const article = React.createElement('article', null, heading, textPar);

    return article;
  }
}

// class MyClassComponent extends Component {}

function MyFunctionalComponent() {
  const heading = React.createElement('h2', {className: 'articleHeading'}, 'Functional Component heading');

  const textPar = React.createElement('p', null, '12345');

  const article = React.createElement('article', null, heading, textPar);

  return article;
}

// Щоб намалювати компонент його закидуємо у createElement першим параметром
const funcElem1 = React.createElement(MyFunctionalComponent);
const funcElem2 = React.createElement(MyFunctionalComponent);

const classElem1 = React.createElement(MyClassComponent);
const classElem2 = React.createElement(MyClassComponent);

// const app = React.createElement('div', null, classElem1, classElem2, funcElem1, funcElem2);

// Фрагмент - спеціальний компонент, який дозволяє створювати обгортку для елементів, яку реакт потім не буде малювати у верстці. Пропси (2 аргумент) завжди мають бути null
// const frag = React.createElement(React.Fragment, null, classElem1, classElem2, funcElem1, funcElem2);

function App() {
  const funcElem1 = React.createElement(MyFunctionalComponent);
  const funcElem2 = React.createElement(MyFunctionalComponent);

  const classElem1 = React.createElement(MyClassComponent);
  const classElem2 = React.createElement(MyClassComponent);

  // return React.createElement('div', null, classElem1, classElem2, funcElem1, funcElem2);
  return React.createElement(React.Fragment, null, classElem1, classElem2, funcElem1, funcElem2);
}

const app = React.createElement(App);

createRoot(document.getElementById('root')).render(app);
