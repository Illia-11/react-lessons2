import React from "react";

class Product extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      isFavourite: false,
    };
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
      product: { id, name, price, description },
    } = this.props;

    const { isFavourite } = this.state;

    return (
      <article id={`product-${id}`}>
        <h2>{name}</h2>
        <p>Price: {price}</p>
        <p>{description}</p>
        {/* <p>{name} is {isFavourite ? '' : 'not'} favourite</p> */}
        <p>
          {" "}
          {name} is {!isFavourite && "not"} favourite{" "}
        </p>
        {/* {!isFavourite && <p>{name} is favourite</p>} */}
        <button id="btn" onClick={this.clickHandler}>
          Make Favourite
        </button>
      </article>
    );
  }
}

export default Product;
