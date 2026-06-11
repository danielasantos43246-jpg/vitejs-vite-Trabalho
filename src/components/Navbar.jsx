function Navbar(props){
  return (
    <>
      <nav className="navbar">
        <span className="navbar-logo">Minha loja</span>
        <span onClick={() => {props.openCart(true)}} className="navbar-cart"> Carrinho ({props.cartCount})</span>
        </nav>
      </>
    )
  }
export default Navbar;