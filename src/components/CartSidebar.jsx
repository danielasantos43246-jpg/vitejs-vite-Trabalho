function CartSidebar ({cartItems, onRemove, onClose }) {
    const total= cartItems. reduce((soma, item) => {
        const preco= parseFloat(item.price.replace(',','.'))
        return soma + preco
    }, 0)

    return (
        <div className= cart-overlay>
            
        </div>
    )


    }
}


export default CartSidebar;