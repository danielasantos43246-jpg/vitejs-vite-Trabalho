function  ProductCard({ name, price, image, onAddToCart}) {
  return (
    <div className= "product-card">
      <img src={image} alt={name}/>
      <div className="product-info">
        <h2>{name}</h2>
        <p className="product-price">R${price}</p>
        <button className="btn-add" onClick={() => onAddToCart({name, price, image})}>Adicionar ao Carrinho</button>

      </div>
    </div>
  )
}

export default ProductCard;