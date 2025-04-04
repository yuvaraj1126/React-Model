import React, { useState } from 'react'
// import ProductList from './components/ProductList'
import Navbar from './pages/Navbar'
import AppRoutes from './AppRoutes'


function App() {
  const[cart,setCart] = useState([]);
  const addToCart = (product) => {
    setCart([...cart, product]);
  };
  return <>
  <Navbar cartCount={cart.length} />
  {/* <ProductList addToCart={addToCart}/> */}
  <AppRoutes cart={cart} addToCart={addToCart} />

  </>
}

export default App