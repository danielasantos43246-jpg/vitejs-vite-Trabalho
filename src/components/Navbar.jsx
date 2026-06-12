function Navbar({ cartCount, onCartClick }) {
  return (
    <nav className="navbar">

      <span className="navbar-logo">
        <span className="logo-barba">BARBA</span>
        <span className="logo-elegante">ELEGANTE</span>
      </span>

      <div className="search-container">
        <span className="search-icon">⌕</span>

        <input
          type="text"
          placeholder="Buscar produtos..."
          className="search-input"
        />
      </div>

      <span className="navbar-cart" onClick={onCartClick}>
        <span className="cart-icon"></span>
        Carrinho ({cartCount})
      </span>

    </nav>
  );
}

export default Navbar;