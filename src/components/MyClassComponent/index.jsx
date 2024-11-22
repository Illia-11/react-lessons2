import React from 'react';


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
    const heading = React.createElement(
      'h2',
      {className: 'articleHeading'},
      'Class Component heading'
    );

    const textPar = React.createElement('p', null, 'Lorem Ipsum');

    const article = React.createElement('article', null, heading, textPar);

    return article;
  }
}

// class MyClassComponent extends Component {}

export default MyClassComponent;
