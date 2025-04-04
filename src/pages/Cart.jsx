import React from "react";

function Cart({ cartItems, removeCart }) {
    console.log("cart", cartItems)
    return (
        <div className="p-4">
            <h2 className="text-2xl font-bold mb-4">Your Cart</h2>
            {cartItems.length === 0 ? (
                <p>Your cart is empty.</p>
            ) : (
                <div className="grid grid-cols-1 gap-4">
                    {cartItems.map((item, index) => (
                        <div key={index} className="border p-4 flex items-center space-x-4">
                            <img src={item.image} alt={item.title} className="h-16 w-16" />
                            <div>
                                <h3 className="font-bold">{item.title}</h3>
                                <p className="text-green-600">₹{item.price}</p>
                                <div>
                                    <button
                                        onClick={() => removeCart(item)}
                                        className="bg-blue-500 text-white py-1 px-4 mt-2"
                                    >
                                        Remove from Cart
                                    </button>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            )}
        </div>
    )
}


export default Cart;