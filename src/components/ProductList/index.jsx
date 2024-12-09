import React, { useState } from "react";
import Product from "../Product";

function ProductList({ products, toggleFavoriteProduct }) {
  // хук стану
  /*
    useState - приймає початкове значення стану (не обовʼязково обʼєкт)
    і повертає кортеж із 2 значень
      1 елемент завжди є поточним значенням стану
      2 елемент завжди буде персоналізованою функцією зміни стану 1 елементу
  */
  const [isReverseOrder, setIsReversedOrder] = useState(false);

  const handleSwitchOrder = () => {
    // функція встановлення нового стану
    setIsReversedOrder(!isReverseOrder);
  };

  const productsComponents = products.map((product) => {
    // Взаємодія Батько - Дитина (пропси)
    return (
      <Product
        key={product.id}
        product={product}
        handleSwitchOrder={handleSwitchOrder}
        toggleFavoriteProduct={toggleFavoriteProduct}
      />
    );
  });

  return (
    <article>
      <h2>Products</h2>
      <p>Sorting order: {isReverseOrder ? 'reverse' : 'straight'}</p>
      <button onClick={handleSwitchOrder}>Switch order</button>
      {isReverseOrder ? productsComponents.reverse() : productsComponents}
    </article>
  );
}

export default ProductList;
