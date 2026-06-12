function Navbar({ cartCount }) {
  return (
    <nav className="navbar">
      <span className="navbar-logo">🛍️ MinhaLoja</span>
      <span className="navbar-cart">🛒 Carrinho ({cartCount})</span>
    </nav>
  );
}

export default Navbar;