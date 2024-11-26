import React from "react";
import styles from "./Product.module.css";

class Product extends React.Component {
  constructor(props) {
    super(props);

    // this.state = {
    //   isFavourite: false,
    // };
  }

  clickHandler = () => {
    // alert('click!');

    // мутація стану. Код не буде працювати
    // this.state.isFavourite = true;

    // функція зміни стану
    // приймає обʼєкт, властивості якого доповнюють або перезаписують властивості стану
    this.setState({
      newPropertyInState: "test",
      isFavourite: true,
    });
  };

  render() {
    // зміна стану викличе повторне відмалювання
    // зміна пропсів також змушує ререндеритися компонент
    const {
      product: { id, name, price, description, isFavourite },
      handleSwitchOrder,
      toggleFavouriteProduct,
    } = this.props;

    return (
      <article id={`product-${id}`} className={styles.container}>
        <h2>{name}</h2>
        <p>Price: {price}</p>
        <p>{description}</p>
        {/* <p>{name} is {isFavourite ? '' : 'not'} favourite</p> */}
        <p>
          {" "}
          {name} is {!isFavourite && "not"} favourite{" "}
        </p>
        {/* {!isFavourite && <p>{name} is favourite</p>} */}
        <button id="btn" onClick={() => toggleFavouriteProduct(id)}>
          Make Favourite
        </button>
        {/* Взаємодія Дитина - батько (коллбек, який змінює стан батька) */}
        <button onClick={handleSwitchOrder}>Change Parent order</button>
      </article>
    );
  }
}

export default Product;
