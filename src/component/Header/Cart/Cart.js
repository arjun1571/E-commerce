import React from 'react';

const Cart = ({cart}) => {

    console.log(cart);
    let total =0;
    let shipping=0;
    for(const product of cart){
        total=total + product.price;
        shipping=shipping + product.shipping;
        
    }
    const tax =(total * 0.1).toFixed(2)
    return (
        <div>
            <h3>Order summary</h3>
                <p>selected item:{cart.length}</p>
                <p>Total Price:${total}</p>    
                <p>Total Shipping:${shipping} </p>
                <p>Tax:${tax}</p>
                <h2>Grand Total: </h2>
        </div>
    );
};

export default Cart;