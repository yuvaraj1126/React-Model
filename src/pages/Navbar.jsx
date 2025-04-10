import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Cart from './Cart';

function Navbar({cartCount,cart,removeToCart}) {
    const [iscart, setIscart ]= useState(false);
    return(
        <nav className="bg-blue-600 text-white p-4 flex justify-between items-center">
            <h1 className='text-xl font-bold'>Product-Uv</h1>
            <div className="space-x-6">
                <Link to="/" className="hover:underline">Home</Link>
                <div className="hover:underline" onClick={()=> setIscart(true)}>
                Cart ({cartCount})
                </div>
                 <Cart open={iscart} handleClose={()=>setIscart(false)} cartItems={cart} removeCart={removeToCart}/>
            </div>
        </nav>
    )
}
{/* {cartCount > 0 && (
            <span className="bg-red-500 text-white text-xs rounded-full px-2 py-1 absolute -top-2 -right-4">
              {cartCount}
            </span>
          )} */} 

export default Navbar;



