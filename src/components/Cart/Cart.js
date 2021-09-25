import React from 'react';
import './Cart.css';

const Cart = (props) => {
    // console.log(props.cart)
    const {cart} = props;
    let total = 0;
    for(const product of cart){
        total = total + product.price;
    }

    const shipping = 20;
    const tax = (total + shipping) * 10;
    const grandTotal = (total + shipping + tax);
    return (
        <div>
            <h3>Order Summary </h3>
                <h5>Items Ordered: {props.cart.length}</h5>
                <p>Total: {total.toFixed(2)}</p>
                <p>Shipping: {shipping}</p>
                <p>Tax: {tax.toFixed(2)}</p>
                <p>Grand Total: {grandTotal.toFixed(2)}</p>
                <button className="btn-review">Review your Order</button>
        </div>
    );
};

export default Cart;