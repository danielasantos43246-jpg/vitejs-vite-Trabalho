import {useState} from 'react';
import Navbar from './components/Navbar';
import ProductList from './components/ProductList';
import CartSidebar from './components/CartSidebar';

const products = [
  /* ... array de produtos ... */

  { id: 1, name: 'Kit 2 Tônicos Ultraminoxi Crescimento Cabelo E Barba 120ml', price: '42,00' ,image: 'https://http2.mlstatic.com/D_NQ_NP_2X_697105-MLB109984294749_042026-F.webp'},
  { id: 2, name: 'Bálsamo Hidratante Para Barba Masculino',price: '55,75',image: 'https://http2.mlstatic.com/D_NQ_NP_2X_601687-MLM105636087636_012026-F.webp'},
  { id: 3, name: 'Kit Cabelo E Barba Shampoo, Condicionador E Pomada - Bio Extratus',price: '199,99',image: 'https://www.evas.com.br/upload/produto/imagem/0e15bdee18429c9f5514a6b0a27456be.webp'},
  { id: 4, name: 'Kit Barba Forte Danger (3 Produtos)',price: '259,90',image: 'https://ikesaki.vteximg.com.br/arquivos/ids/306562/Kit-Barba-Forte-Danger--3-Produtos-.jpg'},
  { id: 5, name: 'Pomada Para Cabelo Efeito Matte',price: '79,00',image: 'https://barbabrasil.com/cdn/shop/products/pomada_matte_120.jpg?v=1683737558'},
  { id: 6, name: 'Laquê Hair Spray 400ml/280g Extra Forte - FOX FOR MEN',price: '70,00',image: 'https://foxformen.com.br/wp-content/uploads/2020/07/Hair-Spray-Fox-For-Men-Laque-Cabelo-Masculino.png'},
  { id: 7, name: 'KIT LEAVE-IN + MATTE',price: '149,90',image: 'https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcT6U76e1y70RHZfRiR18uuVEr37enGX-2wCLbhbRcUvouYx-2WqcbHodgunEcH5lKZLtLwNe8sBfXOoPrV89dEpyvxoPNdcdRWUAATb4WVIMRzWxHJEiYBGBM_tNvaeewMIqMqos2byj7I&usqp=CAc'},
  { id: 8, name: 'Shampoo 2 Em 1 Peaky Blinders Don Alcides',price: '60,00',image: 'https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcRAKPLEmd7ukYDVOAV23-Ve14llXuLebKfH4Qs3Mfn_AgaJt6lXR_ke70kIvqKwd_MizXwPRjKqXXA1wYP_Nir32qcJcwFSvmJnjUF8Tfsl'},
  { id: 9, name: 'Shampoo Siàge Men Estimula o Crescimento 250ml',price: '41,99',image: 'https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcRwaoO4UiLx6YX6cIODI_Jj-x6sIOLQL6QMLPNkuNkWscTGnQB1GK4uGEc1F2Sgr46GeinFMtv_UV0CCW4X5LwAIQO-cZybZ-WYM3y3-sA'},
  { id: 10, name: 'Kit Barba Balm 500ml, Shampoo 1l Óleo Barba Dos Sonhos',price: '180,72',image: 'https://http2.mlstatic.com/D_NQ_NP_2X_912509-MLB78013964983_072024-F.webp'},
  { id: 11, name: 'Kit Fortalecedor Men Barba E Cabelo Valente Completo 7 Itens',price: '86,34',image: 'https://http2.mlstatic.com/D_NQ_NP_2X_809051-MLB107854370441_022026-F.webp'},
  { id: 12, name: 'Kit Barbearia Shampoo Anti-caspas + Tônico + Teia Cavier',price: '109,99',image: 'https://http2.mlstatic.com/D_NQ_NP_2X_972499-MLB111250720884_052026-F.webp'},
  { id: 13, name: 'Pomada modeladora matte clay Baboon 80g 1 unidade',price: '78,82',image: 'https://http2.mlstatic.com/D_NQ_NP_2X_925302-MLA80818835029_112024-F.webp'},
  { id: 14, name: 'Base Balm Para Barba 500g Hidrata E Alinha Os Fios',price: '38,87',image: 'https://http2.mlstatic.com/D_NQ_NP_2X_878444-MLA109212944914_042026-F.webp'},
  { id: 15, name: 'Revitalizante De Óleo De Barba Cedar Forest 30ml Para',price: '140,89',image: 'https://http2.mlstatic.com/D_NQ_NP_2X_602362-CBT80177370623_102024-F-cremo-revitalizante-de-oleo-de-barba-cedar-forest-30ml-para.webp'},

]

function App() {
  const [cartItems, setCartItems]   = useState([])
  const [isCartOpen, setIsCartOpen] = useState(false)

  function handleAddToCart(product) {
    setCartItems([...cartItems, product])
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
        cartCount={cartItems.length}
        onCartClick={handleOpenCart}
      />

      <main className="main-content">
      <h2 className="section-title">Coleção Barba Elegante</h2>
        <ProductList
          products={products}
          onAddToCart={handleAddToCart}
        />
      </main>

      {isCartOpen && (
        <CartSidebar
          cartItems={cartItems}
          onRemove={handleRemoveFromCart}
          onClose={handleCloseCart}
        />
      )}
    </div>
  )
}

export default App