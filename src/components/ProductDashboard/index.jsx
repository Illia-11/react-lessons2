import React from "react";
import ProductList from "../ProductList";
import FavouriteProducts from "../FavouriteProducts";

class ProductDashboard extends React.Component {
  state = {
    products: [
      {
        id: 0,
        name: "Product 1",
        price: 12345.99,
        description: "Lorem Ipsum",
        isFavourite: true,
      },
      {
        id: 1,
        name: "Product 2",
        price: 123.32,
        description: "Lorem Ipsum bla bla bla",
        isFavourite: true,
      },
      {
        id: 2,
        name: "Product 3",
        price: 453,
        description: "Lorem Ipsum bla bla bla",
        isFavourite: false,
      },
      {
        id: 3,
        name: "Product 4",
        price: 9678,
        description: "Lorem Ipsum bla bla bla",
        isFavourite: true,
      },
    ],
  };

  toggleFavouriteProduct = (productId) => {
    const updatedProducts = this.state.products.map((product) => {
      if (product.id === productId) {
        return {
          ...product,
          isFavourite: !product.isFavourite,
        };
      } else {
        return product;
      }
    });

    this.setState({
      products: updatedProducts,
    });
  };

  render() {
    const { products } = this.state;

    const favouriteProducts = products.filter((product) => product.isFavourite);

    return (
      <article>
        <h1>Products Dashboard</h1>
        <ProductList
          products={products}
          toggleFavouriteProduct={this.toggleFavouriteProduct}
        />
        <hr />
        {/* Взаємодія Дитина - дитина (Product через зміну стана ProductDashboard міняє пропси) */}
        <FavouriteProducts products={favouriteProducts} />
      </article>
    );
  }
}

export default ProductDashboard;
