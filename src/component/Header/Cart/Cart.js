import React from 'react';
import "./Cart.css"

const Cart = ({cart}) => {
    console.log(cart)
    let total =0;
    let shipping=0;
    let quantity=0;
    for(const product of cart){
        quantity = quantity + product.quantity;
        total=total + product.price * product.quantity;
        shipping=shipping + product.shipping;
        
    }
    const tax =parseFloat((total * 0.1).toFixed(2)) ;
    const grandTotal = total + shipping + tax;
    return (
        <div className='cartS'>
            <h3>Order summary</h3>
                <p>selected item:{quantity}</p>
                <p>Total Price:${total}</p>    
                <p>Total Shipping:${shipping} </p>
                <p>Tax:${tax}</p>
                <h2>Grand Total:{grandTotal}</h2>
        </div>
    );
};

export default Cart;