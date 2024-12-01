import React from "react";
import Product from "../Product";

class ProductList extends React.Component {
  state = {
    isReverseOrder: false,
  };

  handleSwitchOrder = () => {
    this.setState({
      isReverseOrder: !this.state.isReverseOrder,
    });
  };

  render() {
    const { products, toggleFavouriteProduct } = this.props;
    const { isReverseOrder } = this.state;

    const productsComponents = products.map((product) => {
      // Взаємодія батько - дитина (пропси)
      return (
        <Product
          key={product.id}
          product={product}
          handleSwitchOrder={this.handleSwitchOrder}
          toggleFavouriteProduct={toggleFavouriteProduct}
        />
      );
    });

    return (
      <article>
        <h2>Products</h2>
        <p>Sorting order: {isReverseOrder ? "reverse" : "straight"}</p>
        <button onClick={this.handleSwitchOrder}>Switch order</button>
        {isReverseOrder ? productsComponents.reverse() : productsComponents}
      </article>
    );
  }
}

export default ProductList;
