import React from "react";

class Product extends React.Component {
  render() {
    const {
      product: { id, name, price, describtion },
    } = this.props;

    return (
      <article id={`product-${id}`}>
        <h2>{name}</h2>
        <p>Price: {price}</p>
        <p>{describtion}</p>
      </article>
    );
  }
}

export default Product;
