function  ProductCard({ name, price, image}) {
  return (
    <div className= "ProductCard">
      <img src={image} alt={name}/>
      <div className="Product-Info">
        <h2>{name}</h2>
        <p className="Product-price">R${price}</p>
        <button className="btn-add">Adicionar ao Carrinho</button>

      </div>
    </div>
  );
}

export default ProductCard;