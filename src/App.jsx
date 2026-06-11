import { useState } from 'react';
import Navbar from './components/Navbar.jsx';
import ProductGrid from './components/ProductGrid.jsx';
import SideBar from './components/SideBar.jsx';

function App() {
  const [cartItems, setCartItems] = useState([]);
  const [isCartOpen, setIsCartOpen] = useState(false)


  function handleAddToCart(prodcut) {
    setCartItems([...cartItems, prodcut]);
    console.log(cartItems);
  }

  const products = [
    {
      id: 1,
      title: 'Relógio',
      price: '50,00',
      image:
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR3xnvbNHjgci5Ag5rfccbu0GOoDRFc1Q2xiQ&s',
    },
    {
      id: 2,
      title: 'Pulseira',
      price: '40,00',
      image:
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQuBgKDfOUb9iUoo7ai-0_otSfaXAbfz_CrVQ&s',
    },
    {
      id: 3,
      title: 'Papete',
      price: '40,00',
      image:
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQzeYsSyJFR3HxVA-GLF0Sn98bqX5okyhW91Q&s',
    },
    {
      id: 4,
      title: 'Wid leg',
      price: '40,00',
      image:
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRda-Ss7Zq_8a5xZSRQnGcdNI8sVa6QvadF6Q&s',
    },
    {
      id: 5,
      title: 'Blusa',
      price: '46,00',
      image:
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRA77qTCdmyakAmonNfMbLBjGEqWLsNB0jvOQ&s',
    },
    {
      id: 6,
      title: 'Bag',
      price: '25,00',
      image:
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRM61axtRlLZNrEjlICQ8Qbceqt2HVSldEU0Q&s',
    },
    {
      id: 7,
      title: 'Mochila',
      price: '75,00',
      image:
        'https://ostoresneakers.vteximg.com.br/arquivos/ids/219819-500-500/mochila-adidas-lounge-bege-off-white-branco-hy0738-0.jpg?v=638265084299570000',
    },
     
  ];
  return (
    <>
      <Navbar cartCount={cartItems.length} openCart={setIsCartOpen} />
      <main className="main-content">
        <h2>Produtos</h2>
        <ProductGrid onAddCart={handleAddToCart} products={products} />
        {isCartOpen && (  <SideBar closeCart={setIsCartOpen} cartItems={cartItems} />)}
      </main>
    </>
  );
}

export default App;
