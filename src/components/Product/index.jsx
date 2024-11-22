import React from "react";

class Product extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      isFavourite: true,
    };
  }

  clickHandler = () => {
    alert('click!');
  }

  render() {
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
        <p> {name} is {!isFavourite && "not"} favourite </p>
        {/* {!isFavourite && <p>{name} is favourite</p>} */}
        <button id="btn" onClick={this.clickHandler}>Make Favourite</button>
      </article>
    );
  }
}

export default Product;
