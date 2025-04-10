import React from 'react'
import { Route, Routes } from 'react-router-dom'
import ProductList from './components/ProductList'
import Cart from './pages/Cart'

function AppRoutes({addToCart}) {
  return (
    <Routes>
        <Route path='/' element={<ProductList addToCart={addToCart}/>}/>
        {/* <Route path='/cart' element={<Cart cartItems={cart} removeCart={removeToCart}/>}/> */}
    </Routes>
  )
}

export default AppRoutes