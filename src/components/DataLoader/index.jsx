// import React, { Component } from "react";

// /*
//   1. Компонент має завантажити будь-які дані, які його попросять
//   2. Він має їх зберегти у своєму стані
//   3. При цьому він сам по собі не знає як правильно відмалювати ці дані
//   4. Компонент має якимсь чином надати доступ до свого  стану назовні, щоб
//     звідти на основі даних можна було зробити рендер
// */

// class DataLoader extends Component {
//   state = {
//     data: null,
//     isLoading: false,
//     error: null,
//   };

//   componentDidMount() {
//     this.load();
//   }

//   load = () => {
//     // loadData - функція, яка повертає проміс з даними
//     const { loadData } = this.props;

//     this.setState({
//       isLoading: true,
//     });

//     loadData()
//       .then((data) => {
//         this.setState({ data });
//       })
//       .catch((error) => {
//         this.setState({ error });
//       })
//       .finally(() => {
//         isLoading: false;
//       });
//   };

//   render() {
//     // render - функція, яка містить jsx, який треба відмалювати
//     // const jsxLayout = this.props.render(this.state);

//     const jsxLayout = this.props.children(this.state, this.load);

//     return jsxLayout;
//   }
// }

// export default DataLoader;
