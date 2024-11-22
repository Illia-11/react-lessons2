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
const elem = React.createElement(MyFunctionalComponent);

createRoot(document.getElementById('root')).render(elem);
