function  ProductCard() {
  return (
    <div className= "ProductCard">
      <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRXi2eyLN8zofZzUvbjtPI8lPpwsZHpR95LJQ&s" alt="Produto de barba" />
      <div className="Product-Info">
        <h2>Shampoo p/ Barba e Cabelo</h2>
        <p className="Product-price">R$ 55,96</p>
        <button className="btn-add">Adicionar ao Carrinho</button>

      </div>
    </div>
  );
}

export default ProductCard;