import React from "react";
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};

function Cart({ open,handleClose,cartItems, removeCart }) {
    console.log("cart", cartItems)
    return (
        <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
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
        </div></Box>
        </Modal>
    )
}


export default Cart;