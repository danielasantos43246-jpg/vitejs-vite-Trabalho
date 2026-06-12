function CartSidebar({ cartItems, onRemove, onClose }) {
    const total = cartItems.reduce((soma, item) => {
      const preco = parseFloat(item.price.replace(',', '.'))
      return soma + preco
    }, 0)
  
    return (
      <div className="cart-overlay">
        <div className="cart-sidebar">
          <div className="cart-header">
            <h2>Seu Carrinho</h2>
            <button className="cart-close" onClick={onClose}>✕</button>
          </div>
  
          {cartItems.length === 0 ? (
            <p className="cart-empty">Nenhum item no carrinho.</p>
          ) : (
            <>
              <ul className="cart-list">
                {cartItems.map((item, index) => (
                  <li key={index} className="cart-item">
                    <span className="cart-item-name">{item.name}</span>
                    <span className="cart-item-price">R$ {item.price}</span>
                    <button
                      className="cart-item-remove"
                      onClick={() => onRemove(index)}
                    >
                      🗑️
                    </button>
                  </li>
                ))}
              </ul>
  
              <div className="cart-footer">
                <strong>Total: R$ {total.toFixed(2).replace('.', ',')}</strong>
              </div>
            </>
          )}
        </div>
      </div>
    )
  }
  
  export default CartSidebar