import React, { useState } from 'react'
// import ProductList from './components/ProductList'
import Navbar from './pages/Navbar'
import AppRoutes from './AppRoutes'


function App() {
  const[cart,setCart] = useState([]);
  const addToCart = (product) => {
    // setCart([...cart, product]);
   const isProductExit = cart?.some((item)=>item?.id=== product?.id);

   if(!isProductExit){
    setCart([...cart,product]);
    window.alert("product added successfully")
   }else{
    window.alert("product already added to cart")
   }

  };

  const removeCart =(product) =>{
    const temp =[];
    for (let i=0; i<cart.length;i++){
      if(cart[i].id !== product.id){
        temp.push(cart[i]);
      }
    }
    setCart(temp)
  }

  return <>
  <Navbar cartCount={cart.length} />
  {/* <ProductList addToCart={addToCart}/> */}
  <AppRoutes cart={cart} addToCart={addToCart} removeToCart={removeCart} />

  </>
}

export default App