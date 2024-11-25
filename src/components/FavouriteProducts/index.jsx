function FavouriteProducts(props) {
  const { products } = props;
  const favouriteProducts = products.map((product) => {
    return (
      <li key={product.id}>
        <p>{product.name}</p>
      </li>
    );
  });

  return (
    <article>
      <h2>Favourite products</h2>
      <ul>{favouriteProducts}</ul>
    </article>
  );
}

export default FavouriteProducts;
