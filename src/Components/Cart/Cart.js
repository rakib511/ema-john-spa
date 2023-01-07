import React from 'react';
import "./cart.css";

const Cart = ({ cart }) => {
    console.log(cart);
    let total = 0;
    let shipping = 0;
    let quantity = 0;
    for (const product of cart) {
        quantity = quantity + product.quantity;
        total = total + product.price * product.quantity;
        shipping = shipping + product.shipping;
    }
    const tax = parseFloat((total * 0.1).toFixed(2));
    const grandTotal = total + shipping + tax;

    return (
        <div className='cart-container'>
            <h2>cart summary</h2>
            <p>seleced items : {quantity}</p>
            <p>Total Price : {total}</p>
            <p>Total Shipping : {shipping}</p>
            <p>Tax: {tax}</p>
            <h5>Grand total :{grandTotal}</h5>
        </div>
    );
};

export default Cart;