import {useState} from 'react';
import Navbar from './components/Navbar';
import ProductList from './components/ProductList';
import CartSidebar from './components/CartSidebar';

const products = [
  /* ... array de produtos ... */

  { id: 1, name: 'Finalizador Barba, Cabelo E Bigode 100 ml', price: '85,40' ,image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTHPLd6gTSkW5eT1XlkMc8yYMwD60vO9hZEsA&s'},
  { id: 2, name: 'Kit 3X Balm 140Ml - Proteção Térmica + Favorece Crescimento Senhor Barba',price: '213,75',image: 'https://cdn.awsli.com.br/600x700/1111/1111024/produto/119305298/dc9a072c1a.jpg'},
  { id: 3, name: 'Kit Cabelo E Barba Shampoo, Condicionador E Pomada - Bio Extratus',price: '199,99',image: 'https://www.evas.com.br/upload/produto/imagem/0e15bdee18429c9f5514a6b0a27456be.webp'},
  { id: 4, name: 'Kit Barba Forte Danger (3 Produtos)',price: '259,90',image: 'https://ikesaki.vteximg.com.br/arquivos/ids/306562/Kit-Barba-Forte-Danger--3-Produtos-.jpg'},
  { id: 5, name: 'Pomada Para Cabelo Efeito Matte',price: '79,00',image: 'https://barbabrasil.com/cdn/shop/products/pomada_matte_120.jpg?v=1683737558'},
  { id: 6, name: 'Laquê Hair Spray 400ml/280g Extra Forte - FOX FOR MEN',price: '70,00',image: 'https://foxformen.com.br/wp-content/uploads/2020/07/Hair-Spray-Fox-For-Men-Laque-Cabelo-Masculino.png'},
]

function App() {
  const [cartItems,setCartItem]= useState([])
  const [iscartIpen,setCartOpen]= useState(false)

  function handleAddToCart (product) {
    setCartItems ([...cartItems, product])
  }

  function handleRemoveFromCart(index) {
    setCartItems(cartItems.filter((_, i) => i !== index))
  }

  function handleOpenCart() {
    setIsCartOpen(true)
  }

  function handleCloseCart() {
    setIsCartOpen(false)
  }

  return (
    <div>
      <Navbar 
      
      cartCount={cartCountms.length}
      onCartClick={handleOpenCart}
      />

      <main className="main-content">
        <h2 className="section-title">Nossos Produtos</h2>
        <ProductList
         products={products} 
         onAddToCart={handleAddToCart} />
      </main>
      {setIsCartOpen && (
        <CartSidebar
        cartItems={cartItems}
        onRemove={handleRemoveFromCart}
        onclose={handleCloseCart}
        />
      )}
    </div>
  )
}

export default App;