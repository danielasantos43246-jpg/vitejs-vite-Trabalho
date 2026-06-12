function  ProductCard({ name, price, image, onAddToCart}) {
  return (
    <div className= "ProductCard">
      <img src={image} alt={name}/>
      <div className="Product-Info">
        <h2>{name}</h2>
        <p className="Product-price">R${price}</p>
        <button className="btn-add" onClick={onAddToCart}>Adicionar ao Carrinho</button>

      </div>
    </div>
  );
}

export default ProductCard;