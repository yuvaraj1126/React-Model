import React from 'react';
import { Link } from 'react-router-dom';

function Navbar({cartCount}) {
    return(
        <nav className="bg-blue-600 text-white p-4 flex justify-between items-center">
            <h1 className='text-xl font-bold'>Product-Uv</h1>
            <div className="space-x-6">
                <Link to="/" className="hover:underline">Home</Link>
                {<Link to="/cart" className="hover:underline">Cart ({cartCount})
                
                 </Link>}
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



