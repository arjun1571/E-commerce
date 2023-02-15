import React, { useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import { removeFromDb } from '../../utilities/fakedb';
import Cart from '../Header/Cart/Cart';
import Review from '../Review/Review';

const Order = () => {
const {products,initialCart} = useLoaderData();
    const [cart,setCart]=useState(initialCart)
    const handleRemove =(id)=>{
        const remaning = cart.filter(product => product.id !== id);
        setCart(remaning);
        removeFromDb(id);
    }
    return (
        <div className='shop'>
            <div className='margin'>
                {
                    cart.map(product => <Review handleRemove={handleRemove} key={product.id} product={product} ></Review>)
                }
            </div>
            <div className='cart-container'>
                <Cart cart={cart}></Cart>
            </div>
        </div>
    );
};

export default Order;